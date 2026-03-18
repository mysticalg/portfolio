import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, "..", "public", "data");
const outFile = path.join(outDir, "github-repos.json");
const user = "mysticalg";

const payload = {
  generatedAt: new Date().toISOString(),
  user,
  repositories: await loadRepositories()
};

await mkdir(outDir, { recursive: true });
await writeFile(outFile, JSON.stringify(payload, null, 2));

console.log(`Synced ${payload.repositories.length} repositories to ${outFile}`);

async function loadRepositories() {
  const apiResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`, {
    headers: {
      "User-Agent": "CodexPortfolioBuilder",
      Accept: "application/vnd.github+json",
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
    }
  });

  if (apiResponse.ok) {
    const repos = await apiResponse.json();
    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        homepage: repo.homepage || "",
        language: repo.language,
        topics: repo.topics || [],
        stars: repo.stargazers_count,
        updatedAt: repo.pushed_at
      }));
  }

  const htmlResponse = await fetch(`https://github.com/${user}?tab=repositories`, {
    headers: {
      "User-Agent": "CodexPortfolioBuilder"
    }
  });

  if (!htmlResponse.ok) {
    throw new Error(`GitHub sync failed with API ${apiResponse.status} and HTML ${htmlResponse.status}`);
  }

  const html = await htmlResponse.text();
  const blocks = html.match(/<li class="col-12[\s\S]*?<\/li>/g) || [];
  const repos = [];

  for (const block of blocks) {
    const nameMatch = block.match(new RegExp(`href="/${user}/([^"#?]+)" itemprop="name codeRepository"`));

    if (!nameMatch) {
      continue;
    }

    const descriptionMatch = block.match(/itemprop="description">\s*([\s\S]*?)\s*<\/p>/);
    const languageMatch = block.match(/itemprop="programmingLanguage">([^<]+)<\/span>/);
    const updatedAtMatch = block.match(/<relative-time datetime="([^"]+)"/);
    const starsMatch = block.match(/stargazers"[\s\S]*?<\/svg>\s*([\d,]+)/);
    const name = decodeHtml(nameMatch[1]);

    repos.push({
      name,
      url: `https://github.com/${user}/${name}`,
      description: descriptionMatch ? cleanText(descriptionMatch[1]) : null,
      homepage: "",
      language: languageMatch ? decodeHtml(languageMatch[1]) : null,
      topics: [],
      stars: starsMatch ? Number.parseInt(starsMatch[1].replace(/,/g, ""), 10) : 0,
      updatedAt: updatedAtMatch ? updatedAtMatch[1] : null
    });
  }

  return repos;
}

function cleanText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function decodeHtml(value) {
  return value
    .replace(/â€¦/g, "...")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}
