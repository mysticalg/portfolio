# Mysticalg Portfolio

Employer-facing portfolio site for `mysticalg`, built to be lightweight enough for a small AWS deployment.

Live page: [mysticalg.github.io/portfolio](https://mysticalg.github.io/portfolio/)

## Stack

- Static front end: HTML, CSS, and vanilla JavaScript
- Tiny Node server: `server.js`
- Local GitHub snapshot: `public/data/github-repos.json`

## Run locally

```bash
npm start
```

The site runs on `http://localhost:8080` by default.

## Refresh GitHub project data

```bash
npm run sync:github
```

If GitHub rate limits unauthenticated requests, set `GITHUB_TOKEN` first:

```bash
set GITHUB_TOKEN=your_token_here
npm run sync:github
```

## AWS deployment note

This repo is set up as a static-first Node app, which is a good fit for a small single-instance AWS Elastic Beanstalk environment or a tiny EC2 instance behind Nginx.

Key points:

- the app reads `PORT` from the environment
- there is no build step required
- runtime memory use stays low because the content is served as static files

## Elastic Beanstalk quick path

1. Create a new Node.js Elastic Beanstalk application.
2. Choose a single-instance environment for the lowest-cost setup.
3. Upload this repo as a source bundle.
4. Elastic Beanstalk will run `npm start`, which starts `server.js`.
5. When you want fresh GitHub data, run `npm run sync:github`, commit the updated `public/data/github-repos.json`, and redeploy.

If you meant a small EC2 instance instead, the same app can be run behind Nginx with `node server.js` or a simple process manager such as PM2.

## Redeploy this environment

After the AWS CLI is configured, you can redeploy the existing Elastic Beanstalk environment with:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-eb.ps1
```

## Support

If you'd like to support this project, you can buy me a coffee:
[buymeacoffee.com/dhooksterm](https://buymeacoffee.com/dhooksterm)
