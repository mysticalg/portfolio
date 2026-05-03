const siteContent = {
  hero: {
    name: "David Hook",
    intro:
      "Senior Software Engineer with 20+ years experience building, maintaining, and scaling web applications across agency, in-house, and freelance environments. Strong full-stack expertise across PHP, Laravel, React, MySQL, AWS, commerce platforms, and modern API integrations.",
    stack: ["PHP", "Laravel", "React", "MySQL", "AWS", "Adobe Commerce", "Shopify", "OpenCart"]
  },
  profileSummary:
    "Senior Software Engineer with 20+ years experience building, maintaining, and scaling web applications across agency, in-house, and freelance environments. Strong full-stack expertise with PHP, Laravel, React, MySQL, Adobe Commerce, Shopify, and OpenCart, delivering secure, high-performance solutions in fast-paced and agile teams. I am currently available for freelance commissions.",
  careerPoints: [
    "Architecting and delivering modern web platforms with React front ends and Laravel back ends",
    "Improving legacy systems without losing sight of stability, maintainability, and release cadence",
    "Shipping e-commerce, CMS, booking, search, and API-driven products across Adobe Commerce, Shopify, OpenCart, and bespoke stacks",
    "Comfortable collaborating with stakeholders, product teams, and clients to turn requirements into working software"
  ],
  skillGroups: [
    {
      title: "Programming and Frameworks",
      items: ["PHP", "Laravel", "Zend", "React", "JavaScript", "jQuery", "HTML", "CSS", "MySQL"]
    },
    {
      title: "CMS and E-Commerce",
      items: ["Adobe Commerce", "Magento", "Shopify", "OpenCart", "WordPress", "WooCommerce", "Custom plugins", "SEO improvements"]
    },
    {
      title: "Tools and Platforms",
      items: ["AWS", "Apache", "Linux", "Git", "Subversion", "Jira", "Teams", "Agile delivery"]
    },
    {
      title: "Additional Strengths",
      items: ["REST APIs", "Google APIs", "Amazon integrations", "OpenAI integrations", "MVC frameworks", "Performance tuning"]
    }
  ],
  platformPartners: [
    {
      name: "Adobe Commerce",
      label: "Adobe platform partner",
      logo: "./assets/platforms/adobe-wordmark.svg",
      url: "https://business.adobe.com/products/commerce/adobe-commerce.html",
      body:
        "Magento and Adobe Commerce work covering extensions, marketplace-style delivery, catalogue flows, integrations, and long-term support.",
      strengths: ["Commerce builds", "Extension work", "Performance support"],
      accent: "platform-adobe"
    },
    {
      name: "Shopify",
      label: "Shopify partner",
      logo: "./assets/platforms/shopify-wordmark.svg",
      url: "https://www.shopify.com/partners",
      body:
        "Theme improvements, storefront changes, migrations, checkout-adjacent workflows, and API integrations for merchants who need practical delivery.",
      strengths: ["Theme work", "Storefront polish", "API integration"],
      accent: "platform-shopify"
    },
    {
      name: "OpenCart",
      label: "OpenCart partner",
      logo: "./assets/platforms/opencart.svg",
      url: "https://www.opencart.com/index.php?route=support/partner",
      body:
        "Custom OpenCart extensions, maintenance, catalogue and checkout improvements, and support for long-running PHP commerce installs.",
      strengths: ["Custom modules", "Maintenance", "Checkout improvements"],
      accent: "platform-opencart"
    }
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Property and Change Solutions Ltd",
      period: "Sep 2023 - Feb 2025",
      mode: "Hybrid",
      points: [
        "Architected and developed a modern in-house platform using React on the front end and Laravel REST APIs on the back end.",
        "Designed scalable API services and handled database migrations and schema evolution.",
        "Deployed and maintained applications on AWS with a focus on security, performance, and reliability.",
        "Worked in Agile sprints with GitHub and Jira, contributing to delivery planning and technical decision-making."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Independent",
      period: "Jan 2020 - Sep 2023",
      mode: "Remote",
      points: [
        "Delivered end-to-end web development and updates for a range of business clients.",
        "Enhanced legacy systems and developed custom plugins and extensions for WordPress and OpenCart.",
        "Integrated third-party services including Google, Amazon, and OpenAI APIs.",
        "Balanced hands-on engineering with direct client communication, prioritisation, and support."
      ]
    },
    {
      role: "LAMP Stack Developer",
      company: "Bluebit Ltd",
      period: "Apr 2008 - Jan 2020",
      mode: "Office",
      points: [
        "Maintained and upgraded websites and servers for multiple clients in a fast-paced agency environment.",
        "Worked across bespoke websites, CMS builds, e-commerce projects, and ongoing support engagements.",
        "Coordinated with internal teams on larger projects and handled live website updates for clients.",
        "Built broad experience in delivery, support, performance optimisation, and practical problem solving."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Independent",
      period: "May 2005 - Apr 2008",
      mode: "Hybrid",
      points: [
        "Designed and developed database-driven websites for small businesses.",
        "Managed client consultations, domain hosting, deployments, and ongoing technical support.",
        "Delivered practical, business-focused web solutions with a strong emphasis on usability and maintainability."
      ]
    }
  ],
  commercialProjects: [
    {
      name: "Bluebit Ltd",
      sector: "Agency",
      url: "https://bluebit.co.uk",
      domain: "bluebit.co.uk",
      image: "./assets/commercial/bluebit.png",
      imageAlt: "Bluebit website homepage screenshot",
      description:
        "Contributed to bespoke website development, custom WordPress work, performance optimisation, and scalable web solutions for a full-service web design agency."
    },
    {
      name: "I Like Music",
      sector: "Entertainment",
      url: "https://web.ilikemusic.com",
      domain: "web.ilikemusic.com",
      image: "./assets/commercial/i-like-music.png",
      imageAlt: "I Like Music website homepage screenshot",
      description:
        "Improved user experience, integrated APIs for content management, and enhanced performance for a licensed digital music library."
    },
    {
      name: "Model Store",
      sector: "E-commerce",
      url: "https://modelstore.co.uk",
      domain: "modelstore.co.uk",
      image: "./assets/commercial/model-store.png",
      imageAlt: "Model Store website homepage screenshot",
      description:
        "Developed custom e-commerce features, optimised checkout flows, and applied SEO improvements to support sales."
    },
    {
      name: "Total Wardrobe Storage",
      sector: "Services",
      url: "https://totalwardrobestorage.co.uk",
      domain: "totalwardrobestorage.co.uk",
      image: "./assets/commercial/total-wardrobe-storage.png",
      imageAlt: "Total Wardrobe Storage website homepage screenshot",
      description:
        "Built an intuitive booking experience, improved responsiveness, and optimised back-end performance for a specialist storage business."
    },
    {
      name: "Berthon",
      sector: "Corporate",
      url: "https://berthon.co.uk",
      domain: "berthon.co.uk",
      image: "./assets/commercial/berthon.png",
      imageAlt: "Berthon website homepage screenshot",
      description:
        "Enhanced UI and UX, supported a dynamic yacht listing search experience, and ensured the site worked well on mobile."
    },
    {
      name: "Casa Brasil Restaurants",
      sector: "Hospitality",
      url: "https://casabrasilrestaurants.co.uk",
      domain: "casabrasilrestaurants.co.uk",
      image: "./assets/commercial/casa-brasil.png",
      imageAlt: "Casa Brasil Restaurants website homepage screenshot",
      description:
        "Optimised reservation journeys, improved the menu presentation, and integrated social media content."
    },
    {
      name: "Marcus McCallum Ltd",
      sector: "Luxury Retail",
      url: "",
      domain: "marcusmccallum.co.uk",
      image: "./assets/commercial/marcus-mccallum-archived.svg",
      imageAlt: "Marcus McCallum archived project card",
      status: "Current site access is gated behind login, so this card uses an archival project panel.",
      description:
        "Handled e-commerce enhancements, secure payment integrations, and stronger on-site search for a high-end gemstone business."
    },
    {
      name: "Keffen Plant Hire",
      sector: "Industrial",
      url: "https://keffenplanthire.co.uk",
      domain: "keffenplanthire.co.uk",
      image: "./assets/commercial/keffen-plant-hire.png",
      imageAlt: "Keffen Plant Hire website homepage screenshot",
      description:
        "Built out a machinery catalogue, integrated booking-oriented functionality, and improved overall site speed."
    },
    {
      name: "Brenchleys",
      sector: "Interiors",
      url: "",
      domain: "brenchleys.co.uk",
      image: "./assets/commercial/brenchleys-archived.svg",
      imageAlt: "Brenchleys archived project card",
      status: "The original domain no longer serves the original site, so this entry is shown as an archival project.",
      description:
        "Helped streamline product presentation, integrated CMS-driven updates, and ensured responsive behaviour across devices."
    },
    {
      name: "Brewer Loft Conversions",
      sector: "Lead Generation",
      url: "",
      domain: "brewerloftconversions.co.uk",
      image: "./assets/commercial/brewer-loft-conversions-archived.svg",
      imageAlt: "Brewer Loft Conversions archived project card",
      status: "The legacy domain no longer resolves, so this project is represented with an archival card.",
      description:
        "Improved lead-generation forms, tightened performance, and supported stronger on-page SEO."
    },
    {
      name: "Truvox International",
      sector: "Manufacturing",
      url: "https://truvox.com",
      domain: "truvox.com",
      image: "./assets/commercial/truvox.png",
      imageAlt: "Truvox website homepage screenshot",
      description:
        "Contributed to multilingual delivery, product page optimisation, and back-end system enhancements for a global manufacturer."
    }
  ],
  featuredProjects: [
    {
      repo: "Grok-Video-Studio",
      category: "AI and Automation",
      title: "Grok Video Studio",
      summary:
        "A desktop video studio for generating AI clips, stitching media, and publishing to social platforms through API and browser automation flows.",
      impact:
        "Demonstrates product thinking across UI, media pipelines, AI provider integration, and real-world automation.",
      tech: ["Python", "PySide6", "JavaScript", "OpenAI", "xAI", "Browser Automation"],
      image: "./assets/projects/grok-video-studio.jpg",
      imageAlt: "Grok Video Studio desktop app screenshot",
      accent: "accent-copper"
    },
    {
      repo: "Backchat",
      category: "Cross-Platform App",
      title: "Backchat",
      summary:
        "A cross-platform encrypted messaging scaffold targeting desktop and mobile, with OAuth sign-in, contact discovery, and encryption primitives.",
      impact:
        "Shows architectural range across app structure, auth flows, packaging concerns, and messaging-oriented UX.",
      tech: ["Flutter", "Dart", "PHP", "OAuth", "Encryption", "Desktop and Mobile"],
      image: "./assets/projects/backchat-page.png",
      imageAlt: "Backchat GitHub repository preview showing project structure and README",
      accent: "accent-ink"
    },
    {
      repo: "AI-File-Namer",
      category: "Desktop Tool",
      title: "AI File Namer",
      summary:
        "A Windows desktop app that bulk-renames images and videos using either local vision models or OpenAI-compatible endpoints.",
      impact:
        "Highlights a useful, employer-friendly workflow with scanning, previewing, renaming, and safe rollback.",
      tech: ["Python", "Tkinter", "Ollama", "OpenAI-Compatible APIs", "Windows Packaging"],
      image: "./assets/projects/ai-file-namer-page.png",
      imageAlt: "AI File Namer GitHub repository preview showing README feature list",
      accent: "accent-teal"
    },
    {
      repo: "SkoolDaze",
      category: "Game and Front-End",
      title: "Skool Daze Tribute",
      summary:
        "An original HTML5 fan tribute with a full school map, AI-driven NPC behaviour, bell schedules, mischief systems, and objective progression.",
      impact:
        "A strong signal for front-end engineering depth through stateful systems, UI feedback, and layered gameplay logic.",
      tech: ["JavaScript", "HTML5", "CSS", "Game Systems", "AI NPC Behaviour"],
      image: "./assets/projects/skooldaze-live.png",
      imageAlt: "Skool Daze Tribute live game screenshot",
      accent: "accent-gold"
    },
    {
      repo: "Nuclear-Commando",
      category: "Game and Front-End",
      title: "Nuclear Commando",
      summary:
        "A Contra-inspired side-scrolling shooter built with plain HTML5 canvas, layered levels, deterministic hooks, and custom sprite workflows.",
      impact:
        "Shows performance-minded front-end craft and the ability to build complex interaction-heavy systems without relying on a framework.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS", "Game Loop", "Asset Pipeline"],
      image: "./assets/projects/nuclear-commando-shot.png",
      imageAlt: "Nuclear Commando gameplay screenshot",
      accent: "accent-berry"
    },
    {
      repo: "wav-stem-offsetter",
      category: "Desktop Tool",
      title: "WAV Stem Offsetter",
      summary:
        "A Windows GUI app for extracting stems, applying per-stem time offsets, and reconstructing a new WAV for remix experimentation.",
      impact:
        "Shows practical utility design plus audio-processing awareness and workflow-focused UI thinking.",
      tech: ["Python", "PySide6", "Demucs", "Audio Processing", "Windows GUI"],
      image: "./assets/projects/wav-stem-offsetter-page.png",
      imageAlt: "WAV Stem Offsetter GitHub repository preview showing README and features",
      accent: "accent-green"
    }
  ],
  strengths: [
    {
      title: "Senior Delivery Experience",
      body:
        "Experience across agency, in-house, and freelance settings means I am comfortable with multiple delivery models, stakeholders, and project constraints."
    },
    {
      title: "Strong Web Foundation",
      body:
        "My core stack spans PHP, Laravel, React, MySQL, JavaScript, CMS platforms, and the practical realities of long-lived production systems."
    },
    {
      title: "Modernisation Without Drama",
      body:
        "I am used to improving existing products, integrating new services, and evolving schemas and codebases without losing sight of stability."
    },
    {
      title: "Commerce Platform Delivery",
      body:
        "Adobe Commerce, Shopify, OpenCart, WordPress, and WooCommerce experience helps me handle both modern storefront work and older production systems."
    },
    {
      title: "Curiosity Beyond the Day Job",
      body:
        "My public GitHub work shows continued experimentation with AI tooling, desktop software, automation, and front-end interaction work."
    }
  ],
  education: [
    {
      title: "A-Level Computing",
      detail: "Totton College",
      period: "1997 - 1999"
    },
    {
      title: "A-Level Music Technology",
      detail: "Brockenhurst College",
      period: "1995 - 1997"
    },
    {
      title: "GCSEs",
      detail: "Applemore Technology College",
      period: "1990 - 1995"
    }
  ],
  interests: [
    "Music production and audio technology",
    "Exploring AI-assisted development workflows",
    "Long-term system architecture and optimisation"
  ]
};

const filterDefinitions = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Desktop", value: "desktop" },
  { label: "Games", value: "games" },
  { label: "Browser", value: "browser" }
];

const repoOverrides = new Map([
  [
    "SkoolDaze",
    {
      homepage: "https://mysticalg.github.io/SkoolDaze/"
    }
  ],
  [
    "Grok-Video-Studio",
    {
      homepage: "https://mysticalg.github.io/Grok-Video-Studio/"
    }
  ]
]);

const projectCategoryMap = new Map([
  ["Grok-Video-Studio", "ai"],
  ["AI-File-Namer", "ai"],
  ["YouTube-AI-Comment-Replies", "ai"],
  ["YoutubeCommentResponder", "ai"],
  ["Backchat", "desktop"],
  ["wav-stem-offsetter", "desktop"],
  ["video-link-grabber", "browser"],
  ["Chrome-Icon-Enlarger", "browser"],
  ["SkoolDaze", "games"],
  ["Nuclear-Commando", "games"],
  ["720degrees", "games"],
  ["SpaceInvaders", "games"],
  ["GrandTheftAutoMini", "games"],
  ["saboteur", "games"],
  ["Renegade", "games"],
  ["Gold-Digger", "games"],
  ["boomtrack", "games"]
]);

const statStrip = document.querySelector("#stat-strip");
const featuredGrid = document.querySelector("#featured-grid");
const strengthGrid = document.querySelector("#strength-grid");
const projectGrid = document.querySelector("#project-grid");
const filterBar = document.querySelector("#filter-bar");
const searchInput = document.querySelector("#project-search");
const coreStack = document.querySelector("#core-stack");
const profileSummaryElement = document.querySelector("#profile-summary");
const skillGroups = document.querySelector("#skill-groups");
const careerPoints = document.querySelector("#career-points");
const platformGrid = document.querySelector("#platform-grid");
const experienceGrid = document.querySelector("#experience-grid");
const commercialGrid = document.querySelector("#commercial-grid");
const commercialPrev = document.querySelector("[data-commercial-prev]");
const commercialNext = document.querySelector("[data-commercial-next]");
const educationList = document.querySelector("#education-list");
const interestList = document.querySelector("#interest-list");

let repoData = [];
let activeFilter = "all";
let searchValue = "";

document.querySelector("#hero-name").textContent = siteContent.hero.name;
document.querySelector("#hero-intro").textContent = siteContent.hero.intro;
profileSummaryElement.textContent = siteContent.profileSummary;

siteContent.hero.stack.forEach((item) => {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = item;
  coreStack.append(chip);
});

renderSkillGroups();
renderCareerPoints();
renderPlatformPartners();
renderExperience();
renderCommercialProjects();
setupCommercialCarousel();
renderFeaturedProjects();
renderStrengths();
renderEducation();
renderInterests();
renderFilters();
loadRepos();

searchInput.addEventListener("input", (event) => {
  searchValue = event.target.value.trim().toLowerCase();
  renderProjectGrid();
});

async function loadRepos() {
  try {
    const response = await fetch("./data/github-repos.json");
    const payload = await response.json();
    repoData = (payload.repositories || []).map((repo) => ({
      ...repo,
      ...(repoOverrides.get(repo.name) || {})
    }));
    renderStats(payload.repositories || []);
    renderProjectGrid();
  } catch (error) {
    renderStats([]);
    projectGrid.innerHTML = `
      <article class="project-list-card project-list-card-empty">
        <h3>Project data unavailable</h3>
        <p>The static portfolio shell is ready, but the GitHub data file could not be loaded.</p>
      </article>
    `;
    console.error(error);
  }
}

function renderStats(repositories) {
  const totalProjects = repositories.length;
  const recentProjects = repositories.filter((repo) => {
    const updatedAt = new Date(repo.updatedAt);
    const daysSinceUpdate = (Date.now() - updatedAt.getTime()) / (1000 * 60 * 60 * 24);
    return daysSinceUpdate <= 45;
  }).length;

  const stats = [
    "20+ years in web development",
    "PHP, Laravel, React, MySQL, AWS",
    `${siteContent.commercialProjects.length} website projects with visuals`,
    `${totalProjects || 29} public repositories`,
    `${recentProjects || "Several"} recently updated GitHub projects`
  ];

  statStrip.innerHTML = "";
  stats.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    statStrip.append(li);
  });
}

function renderSkillGroups() {
  skillGroups.innerHTML = "";

  siteContent.skillGroups.forEach((group) => {
    const article = document.createElement("article");
    article.className = "skill-group";
    article.innerHTML = `
      <h3>${group.title}</h3>
      <div class="chip-grid">
        ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
    `;
    skillGroups.append(article);
  });
}

function renderCareerPoints() {
  careerPoints.innerHTML = "";

  siteContent.careerPoints.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    careerPoints.append(li);
  });
}

function renderPlatformPartners() {
  if (!platformGrid) {
    return;
  }

  platformGrid.innerHTML = "";

  siteContent.platformPartners.forEach((platform) => {
    const article = document.createElement("article");
    article.className = `platform-card ${platform.accent}`;
    article.innerHTML = `
      <a class="platform-logo-link" href="${platform.url}" target="_blank" rel="noreferrer" aria-label="${platform.name}">
        <img class="platform-logo" src="${platform.logo}" alt="${platform.name} logo" loading="eager" />
      </a>
      <div class="platform-copy">
        <p class="project-category">${platform.label}</p>
        <h3>${platform.name}</h3>
        <p>${platform.body}</p>
      </div>
      <div class="platform-strengths">
        ${platform.strengths.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
    platformGrid.append(article);
  });
}

function renderExperience() {
  experienceGrid.innerHTML = "";

  siteContent.experience.forEach((job) => {
    const article = document.createElement("article");
    article.className = "experience-card";
    article.innerHTML = `
      <p class="project-category">${job.role}</p>
      <h3>${job.company}</h3>
      <p class="experience-meta">${job.period} | ${job.mode}</p>
      <ul class="experience-points">
        ${job.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    `;
    experienceGrid.append(article);
  });
}

function renderCommercialProjects() {
  commercialGrid.innerHTML = "";

  siteContent.commercialProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "commercial-card";
    article.innerHTML = `
      <div class="commercial-media">
        <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" />
      </div>
      <div class="commercial-body">
        <p class="project-category">${project.sector}</p>
        <h3>${project.name}</h3>
        <p class="commercial-domain">${renderCommercialDomain(project)}</p>
        <p class="project-summary">${project.description}</p>
        ${project.status ? `<p class="commercial-status">${project.status}</p>` : ""}
      </div>
    `;
    commercialGrid.append(article);
  });
}

function setupCommercialCarousel() {
  if (!commercialGrid || !commercialPrev || !commercialNext) {
    return;
  }

  const scrollCarousel = (direction) => {
    const card = commercialGrid.querySelector(".commercial-card");
    const gap = Number.parseFloat(getComputedStyle(commercialGrid).columnGap || getComputedStyle(commercialGrid).gap || "16");
    const amount = card ? card.getBoundingClientRect().width + gap : commercialGrid.clientWidth * 0.9;
    commercialGrid.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  commercialPrev.addEventListener("click", () => scrollCarousel(-1));
  commercialNext.addEventListener("click", () => scrollCarousel(1));
}

function renderCommercialDomain(project) {
  if (!project.url) {
    return project.domain;
  }

  return `<a href="${project.url}" target="_blank" rel="noreferrer">${project.domain}</a>`;
}

function renderFeaturedProjects() {
  featuredGrid.innerHTML = "";

  siteContent.featuredProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = `featured-card ${project.accent || ""}`;
    article.innerHTML = `
      <div class="featured-media">
        <img src="${project.image}" alt="${project.imageAlt}" loading="eager" />
      </div>
      <div class="featured-body">
        <p class="project-category">${project.category}</p>
        <h3>${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <p class="project-impact">${project.impact}</p>
        <div class="chip-grid">
          ${project.tech.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="https://github.com/mysticalg/${project.repo}" target="_blank" rel="noreferrer">View repo</a>
        </div>
      </div>
    `;
    featuredGrid.append(article);
  });
}

function renderStrengths() {
  strengthGrid.innerHTML = "";

  siteContent.strengths.forEach((strength) => {
    const article = document.createElement("article");
    article.className = "strength-card";
    article.innerHTML = `
      <h3>${strength.title}</h3>
      <p>${strength.body}</p>
    `;
    strengthGrid.append(article);
  });
}

function renderEducation() {
  educationList.innerHTML = "";

  siteContent.education.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.title}</strong>
      <span>${item.detail}</span>
      <span>${item.period}</span>
    `;
    educationList.append(li);
  });
}

function renderInterests() {
  interestList.innerHTML = "";

  siteContent.interests.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    interestList.append(li);
  });
}

function renderFilters() {
  filterBar.innerHTML = "";

  filterDefinitions.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = item.value === activeFilter ? "filter-chip active" : "filter-chip";
    button.textContent = item.label;
    button.addEventListener("click", () => {
      activeFilter = item.value;
      renderFilters();
      renderProjectGrid();
    });
    filterBar.append(button);
  });
}

function renderProjectGrid() {
  const visibleProjects = repoData
    .filter((repo) => repo.name !== "portfolio")
    .filter((repo) => {
      const category = projectCategoryMap.get(repo.name) || inferCategory(repo);
      const haystack = [repo.name, repo.description, repo.language, ...(repo.topics || [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesFilter = activeFilter === "all" || category === activeFilter;
      const matchesSearch = !searchValue || haystack.includes(searchValue);

      return matchesFilter && matchesSearch;
    });

  projectGrid.innerHTML = "";

  if (visibleProjects.length === 0) {
    projectGrid.innerHTML = `
      <article class="project-list-card project-list-card-empty">
        <h3>No matching projects</h3>
        <p>Try a different search term or switch the active filter.</p>
      </article>
    `;
    return;
  }

  visibleProjects.forEach((repo) => {
    const category = projectCategoryMap.get(repo.name) || inferCategory(repo);
    const article = document.createElement("article");
    article.className = "project-list-card";
    article.innerHTML = `
      <div class="project-list-top">
        <div>
          <p class="project-category">${labelForCategory(category)}</p>
          <h3>${repo.name}</h3>
        </div>
        <p class="project-meta">Updated ${formatDate(repo.updatedAt)}</p>
      </div>
      <p class="project-summary">${repo.description || "Repository available on GitHub."}</p>
      <div class="project-list-bottom">
        <div class="chip-grid">
          ${renderRepoChips(repo)}
        </div>
        <a href="${repo.url}" target="_blank" rel="noreferrer">Open repo</a>
      </div>
    `;
    projectGrid.append(article);
  });
}

function renderRepoChips(repo) {
  const chips = [];

  if (repo.language) {
    chips.push(repo.language);
  }

  if (repo.homepage) {
    chips.push("Live page");
  }

  (repo.topics || []).slice(0, 3).forEach((topic) => chips.push(topic));

  return chips.map((item) => `<span class="chip">${item}</span>`).join("");
}

function inferCategory(repo) {
  const description = (repo.description || "").toLowerCase();
  const name = repo.name.toLowerCase();
  const language = (repo.language || "").toLowerCase();

  if (description.includes("ai") || description.includes("automation") || name.includes("ai")) {
    return "ai";
  }

  if (description.includes("chrome") || description.includes("extension")) {
    return "browser";
  }

  if (
    description.includes("game") ||
    name.includes("invaders") ||
    name.includes("daze") ||
    name.includes("commando") ||
    name.includes("720") ||
    language === "html"
  ) {
    return "games";
  }

  if (language === "python" || language === "dart" || description.includes("gui")) {
    return "desktop";
  }

  return "all";
}

function labelForCategory(value) {
  switch (value) {
    case "ai":
      return "AI and Automation";
    case "desktop":
      return "Desktop and App";
    case "games":
      return "Games and Interactive";
    case "browser":
      return "Browser Tool";
    default:
      return "Project";
  }
}

function formatDate(value) {
  if (!value) {
    return "recently";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}
