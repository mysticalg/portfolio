#!/bin/bash
set -euo pipefail

TOKEN="$(curl -fsS -X PUT http://169.254.169.254/latest/api/token -H 'X-aws-ec2-metadata-token-ttl-seconds: 21600')"
PUBLIC_IP="$(curl -fsS -H "X-aws-ec2-metadata-token: ${TOKEN}" http://169.254.169.254/latest/meta-data/public-ipv4)"
DASHED_IP="${PUBLIC_IP//./-}"
DOMAIN="portfolio.${DASHED_IP}.sslip.io"
EMAIL_FLAG="--register-unsafely-without-email"
CERTBOT_BIN=""

ensure_certbot() {
  if command -v certbot >/dev/null 2>&1; then
    CERTBOT_BIN="$(command -v certbot)"
    return
  fi

  dnf install -y certbot >/dev/null 2>&1 || python3 -m pip install --upgrade certbot >/dev/null 2>&1

  if command -v certbot >/dev/null 2>&1; then
    CERTBOT_BIN="$(command -v certbot)"
  elif [[ -x /usr/local/bin/certbot ]]; then
    CERTBOT_BIN="/usr/local/bin/certbot"
  else
    echo "certbot is not available after installation attempt" >&2
    exit 1
  fi
}

write_renewal_hooks() {
  install -d /etc/letsencrypt/renewal-hooks/pre /etc/letsencrypt/renewal-hooks/post

  cat > /etc/letsencrypt/renewal-hooks/pre/stop-nginx.sh <<'EOF'
#!/bin/bash
systemctl stop nginx || true
EOF

  cat > /etc/letsencrypt/renewal-hooks/post/start-nginx.sh <<'EOF'
#!/bin/bash
systemctl start nginx || systemctl restart nginx || true
EOF

  chmod +x /etc/letsencrypt/renewal-hooks/pre/stop-nginx.sh
  chmod +x /etc/letsencrypt/renewal-hooks/post/start-nginx.sh

  cat > /etc/cron.d/certbot-renew <<EOF
17 3 * * * root ${CERTBOT_BIN} renew -q
EOF
}

issue_initial_certificate() {
  local had_cert="false"
  if [[ -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ]]; then
    had_cert="true"
  fi

  systemctl stop nginx || true

  if ! "${CERTBOT_BIN}" certonly \
    --standalone \
    --non-interactive \
    --agree-tos \
    ${EMAIL_FLAG} \
    --keep-until-expiring \
    --preferred-challenges http \
    -d "${DOMAIN}"; then
    systemctl start nginx || systemctl restart nginx || true

    if [[ "${had_cert}" == "true" ]]; then
      return
    fi

    exit 1
  fi

  systemctl start nginx || systemctl restart nginx || true
}

write_nginx_config() {
  cat > /etc/nginx/conf.d/https-portfolio.conf <<EOF
server {
    listen 80;
    server_name ${DOMAIN};

    location / {
        return 301 https://\$host\$request_uri;
    }
}

server {
    listen 443 ssl;
    http2 on;
    server_name ${DOMAIN};

    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;

    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-Frame-Options SAMEORIGIN always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}
EOF

  nginx -t
  systemctl reload nginx
}

write_public_hint() {
  cat > /var/app/current/public/free-domain.json <<EOF
{"url":"https://${DOMAIN}"}
EOF
}

ensure_certbot
write_renewal_hooks
issue_initial_certificate
write_nginx_config
write_public_hint
