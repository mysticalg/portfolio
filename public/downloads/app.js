const downloadProjects = [
  {
    name: "Backchat",
    category: "Messenger App",
    availability: "Hosted Build",
    summary:
      "Cross-platform encrypted messaging scaffold with OAuth sign-in, unread badges, tray behavior, and WebRTC calling support.",
    notes:
      "The hosted file here is the current Windows desktop zip from the local release workspace. The repo covers broader platform targets as the build pipeline matures.",
    chips: ["Windows", "Flutter", "Desktop", "Messaging"],
    artifacts: [
      {
        label: "Windows ZIP",
        detail: "Portable desktop build",
        size: "11.89 MB",
        href: "./files/backchat/backchat-windows-release-20260318.zip",
        kind: "Hosted here",
        download: "backchat-windows-release-20260318.zip"
      }
    ],
    links: [
      { label: "Live page", href: "https://mysticalg.github.io/Backchat/" },
      { label: "GitHub repo", href: "https://github.com/mysticalg/Backchat" }
    ],
    accent: "accent-ink"
  },
  {
    name: "AI File Namer",
    category: "Desktop Tool",
    availability: "Release Page",
    summary:
      "Windows GUI for bulk-renaming images and videos with local vision models or OpenAI-compatible endpoints.",
    notes:
      "Installer workflows are already set up for Windows and macOS, so this card sends you to the repo releases page for the newest packaged builds.",
    chips: ["Windows", "macOS", "Python", "AI"],
    artifacts: [
      {
        label: "GitHub Releases",
        detail: "Windows EXE, Windows MSI, and macOS PKG builds",
        href: "https://github.com/mysticalg/AI-File-Namer/releases",
        kind: "External"
      }
    ],
    links: [
      { label: "Live page", href: "https://mysticalg.github.io/AI-File-Namer/" },
      { label: "GitHub repo", href: "https://github.com/mysticalg/AI-File-Namer" }
    ],
    accent: "accent-teal"
  },
  {
    name: "AI Synth",
    category: "Audio Plugin and App",
    availability: "Hosted Build",
    summary:
      "JUCE-based synth project with VST3 output and a standalone Windows build for testing outside a DAW host.",
    notes:
      "The direct download here is the locally built standalone executable. The repo documents broader VST3 and multi-platform artifact flows.",
    chips: ["Windows", "JUCE", "Standalone", "VST3"],
    artifacts: [
      {
        label: "Windows EXE",
        detail: "Standalone synth build",
        size: "7.24 MB",
        href: "./files/ai-synth/ai-synth-standalone-windows.exe",
        kind: "Hosted here",
        download: "ai-synth-standalone-windows.exe"
      }
    ],
    links: [
      { label: "Live page", href: "https://mysticalg.github.io/AI-Synth/" },
      { label: "GitHub repo", href: "https://github.com/mysticalg/AI-Synth" }
    ],
    accent: "accent-copper"
  },
  {
    name: "IDKick",
    category: "Legacy Plugin",
    availability: "Hosted Build",
    summary: "Legacy VST kick plugin binary package preserved as a ready-to-drop Windows DLL release.",
    notes: "Copy the DLL into your VST plugins folder and rescan plugins in your host.",
    chips: ["Windows", "VST", "DLL", "Legacy"],
    artifacts: [
      {
        label: "IDKick.dll",
        detail: "Legacy plugin binary",
        size: "1.87 MB",
        href: "./files/idkick/idkick.dll",
        kind: "Hosted here",
        download: "idkick.dll"
      }
    ],
    links: [
      { label: "Live page", href: "https://mysticalg.github.io/IDKick/" },
      { label: "GitHub repo", href: "https://github.com/mysticalg/IDKick" }
    ],
    accent: "accent-gold"
  },
  {
    name: "IDSynth",
    category: "Legacy Plugin",
    availability: "Hosted Build",
    summary:
      "Classic VST synth release with both the original packaged beta archive and the direct DLL for a quicker install path.",
    notes:
      "Use the archive if you want the historical packaged release, or grab the DLL directly if you just want the plugin binary.",
    chips: ["Windows", "VST", "DLL", "Legacy"],
    artifacts: [
      {
        label: "Beta 2 archive",
        detail: "Original packaged release",
        size: "0.78 MB",
        href: "./files/idsynth/idsynth-beta2.rar",
        kind: "Hosted here",
        download: "idsynth-beta2.rar"
      },
      {
        label: "IDSynth.dll",
        detail: "Direct plugin binary",
        size: "2.25 MB",
        href: "./files/idsynth/idsynth.dll",
        kind: "Hosted here",
        download: "idsynth.dll"
      }
    ],
    links: [
      { label: "Live page", href: "https://mysticalg.github.io/IDSynth/" },
      { label: "GitHub repo", href: "https://github.com/mysticalg/IDSynth" }
    ],
    accent: "accent-green"
  }
];

const statStrip = document.querySelector("#download-stat-strip");
const downloadGrid = document.querySelector("#download-grid");

renderStats();
renderDownloadGrid();

function renderStats() {
  const hostedArtifacts = downloadProjects.flatMap((project) => project.artifacts).filter((artifact) => artifact.kind === "Hosted here").length;
  const externalArtifacts = downloadProjects.flatMap((project) => project.artifacts).filter((artifact) => artifact.kind === "External").length;

  const stats = [
    `${downloadProjects.length} project download cards`,
    `${hostedArtifacts} hosted files`,
    `${externalArtifacts} release-page links`,
    "Windows apps, portable zips, and VST binaries"
  ];

  statStrip.innerHTML = "";
  stats.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    statStrip.append(li);
  });
}

function renderDownloadGrid() {
  downloadGrid.innerHTML = "";

  downloadProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = `download-card ${project.accent || ""}`;

    const top = document.createElement("div");
    top.className = "download-card-top";

    const heading = document.createElement("div");
    heading.innerHTML = `
      <p class="project-category">${project.category}</p>
      <h3>${project.name}</h3>
    `;

    const badge = document.createElement("p");
    badge.className = "download-badge";
    badge.textContent = project.availability;

    top.append(heading, badge);

    const summary = document.createElement("p");
    summary.className = "project-summary";
    summary.textContent = project.summary;

    const chips = document.createElement("div");
    chips.className = "chip-grid";
    project.chips.forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = item;
      chips.append(chip);
    });

    const artifactList = document.createElement("div");
    artifactList.className = "artifact-list";
    project.artifacts.forEach((artifact) => artifactList.append(renderArtifact(artifact)));

    const note = document.createElement("p");
    note.className = "download-note";
    note.textContent = project.notes;

    const links = document.createElement("div");
    links.className = "project-links";
    project.links.forEach((item) => {
      const anchor = document.createElement("a");
      anchor.href = item.href;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      anchor.textContent = item.label;
      links.append(anchor);
    });

    article.append(top, summary, chips, artifactList, note, links);
    downloadGrid.append(article);
  });
}

function renderArtifact(artifact) {
  const wrapper = document.createElement("div");
  wrapper.className = "artifact-item";

  const copy = document.createElement("div");
  copy.className = "artifact-copy";

  const titleRow = document.createElement("div");
  titleRow.className = "artifact-title-row";

  const label = document.createElement("p");
  label.className = "artifact-label";
  label.textContent = artifact.label;

  const pill = document.createElement("span");
  pill.className = artifact.kind === "Hosted here" ? "artifact-pill artifact-pill-hosted" : "artifact-pill artifact-pill-external";
  pill.textContent = artifact.kind;

  titleRow.append(label, pill);

  const meta = document.createElement("p");
  meta.className = "artifact-meta";
  meta.textContent = [artifact.detail, artifact.size].filter(Boolean).join(" | ");

  copy.append(titleRow, meta);

  const anchor = document.createElement("a");
  anchor.className = "button button-secondary artifact-button";
  anchor.href = artifact.href;
  anchor.textContent = artifact.kind === "Hosted here" ? "Download" : "Open";

  if (artifact.download) {
    anchor.setAttribute("download", artifact.download);
  } else {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }

  wrapper.append(copy, anchor);
  return wrapper;
}
