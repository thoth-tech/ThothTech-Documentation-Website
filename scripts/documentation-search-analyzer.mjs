import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = path.resolve("src/content/docs");

const results = {
  totalDocuments: 0,
  missingTitle: [],
  missingDescription: [],
  emptyDescription: [],
  weakTitles: [],
  internalLinks: 0,
  orphanedDocuments: [],
  duplicateTitles: [],
  similarTitles: [],
};

const WEAK_TITLES = new Set([
  "overview",
  "setup",
  "guide",
  "documentation",
  "introduction",
  "index",
  "notes",
  "report",
  "research",
]);

const TITLE_STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "for",
  "in",
  "of",
  "on",
  "the",
  "to",
  "with",
]);

const SIMILARITY_THRESHOLD = 0.8;

/*
 * Find all Markdown and MDX documentation files recursively.
 */
function getDocumentationFiles(directory) {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...getDocumentationFiles(fullPath));
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".md") ||
        entry.name.endsWith(".mdx"))
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

/*
 * Extract YAML-style frontmatter.
 */
function extractFrontmatter(content) {
  if (!content.startsWith("---")) {
    return null;
  }

  const end = content.indexOf("\n---", 3);

  if (end === -1) {
    return null;
  }

  return content.slice(3, end).trim();
}

/*
 * Retrieve a simple scalar value from frontmatter.
 */
function getFrontmatterValue(frontmatter, key) {
  if (!frontmatter) {
    return null;
  }

  const lines = frontmatter.split(/\r?\n/);

  for (const line of lines) {
    const match = line.match(
      new RegExp(`^${key}\\s*:\\s*(.*)$`, "i"),
    );

    if (match) {
      return match[1]
        .trim()
        .replace(/^["']|["']$/g, "");
    }
  }

  return null;
}

/*
 * Return a repository-relative file path for readable reports.
 */
function relativeFile(file) {
  return path.relative(process.cwd(), file);
}

/*
 * Convert a documentation file path into a normalized
 * Starlight-style route.
 *
 * Example:
 *
 * Products/SplashKit/02-setting-up.mdx
 * -> products/splashkit/02-setting-up
 *
 * Products/SplashKit/index.mdx
 * -> products/splashkit
 */
function normaliseDocumentPath(file) {
  let documentPath = path
    .relative(DOCS_DIR, file)
    .replace(/\\/g, "/")
    .replace(/\.(md|mdx)$/i, "")
    .replace(/\/index$/i, "");

  documentPath = documentPath
    .split("/")
    .map((segment) =>
      encodeURIComponent(segment)
        .replace(/%20/g, "-")
        .toLowerCase(),
    )
    .join("/");

  return documentPath;
}

/*
 * Extract both Markdown links:
 *
 * [Setup](/products/splashkit/02-setting-up)
 *
 * and MDX/HTML links:
 *
 * href="/products/splashkit/02-setting-up"
 */
function extractLinks(content) {
  const links = new Set();

  const markdownPattern =
    /!?\[[^\]]*\]\(([^)]+)\)/g;

  const hrefPattern =
    /\bhref\s*=\s*["']([^"']+)["']/gi;

  let match;

  while (
    (match = markdownPattern.exec(content)) !== null
  ) {
    links.add(match[1].trim());
  }

  while (
    (match = hrefPattern.exec(content)) !== null
  ) {
    links.add(match[1].trim());
  }

  return [...links];
}

/*
 * Resolve an internal link into the same normalized route
 * format used by normaliseDocumentPath().
 */
function resolveInternalLink(sourceFile, link) {
  if (
    !link ||
    link.startsWith("http://") ||
    link.startsWith("https://") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:") ||
    link.startsWith("#")
  ) {
    return null;
  }

  let cleanLink = link
    .split("#")[0]
    .split("?")[0]
    .replace(/^<|>$/g, "")
    .trim();

  if (!cleanLink) {
    return null;
  }

  try {
    cleanLink = decodeURIComponent(cleanLink);
  } catch {
    // Keep the original link if URI decoding fails.
  }

  cleanLink = cleanLink.replace(/\\/g, "/");

  let resolved;

  if (cleanLink.startsWith("/")) {
    resolved = cleanLink.replace(/^\/+/, "");
  } else {
    const sourceRoute =
      normaliseDocumentPath(sourceFile);

    const sourceDirectory =
      path.posix.dirname(sourceRoute);

    resolved = path.posix.normalize(
      path.posix.join(
        sourceDirectory,
        cleanLink,
      ),
    );
  }

  resolved = resolved
    .replace(/\.(md|mdx)$/i, "")
    .replace(/\/index$/i, "")
    .replace(/^\/+|\/+$/g, "");

  return resolved
    .split("/")
    .map((segment) =>
      segment
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase(),
    )
    .join("/");
}

/*
 * Analyse title and description metadata.
 */
function analyseDocument(file) {
  const content = fs.readFileSync(file, "utf8");
  const frontmatter =
    extractFrontmatter(content);

  const title =
    getFrontmatterValue(frontmatter, "title");

  const description =
    getFrontmatterValue(
      frontmatter,
      "description",
    );

  results.totalDocuments++;

  if (!title) {
    results.missingTitle.push(
      relativeFile(file),
    );
  } else if (
    WEAK_TITLES.has(title.toLowerCase())
  ) {
    results.weakTitles.push({
      file: relativeFile(file),
      title,
    });
  }

  if (description === null) {
    results.missingDescription.push(
      relativeFile(file),
    );
  } else if (description.length === 0) {
    results.emptyDescription.push(
      relativeFile(file),
    );
  }
}

/*
 * Build a graph of relationships between documentation pages.
 *
 * Pages without incoming content links are reported as
 * potentially orphaned. They may still be discoverable through
 * Starlight navigation or search, so this is intentionally
 * treated as an informational signal.
 */
function analyseLinkGraph(files) {
  const routeToFile = new Map();

  for (const file of files) {
    routeToFile.set(
      normaliseDocumentPath(file),
      file,
    );
  }

  const incomingLinks = new Map();

  for (const route of routeToFile.keys()) {
    incomingLinks.set(route, 0);
  }

  for (const file of files) {
    const content = fs.readFileSync(
      file,
      "utf8",
    );

    const links = extractLinks(content);

    for (const link of links) {
      const target = resolveInternalLink(
        file,
        link,
      );

      if (!target) {
        continue;
      }

      if (routeToFile.has(target)) {
        results.internalLinks++;

        incomingLinks.set(
          target,
          (incomingLinks.get(target) ?? 0) + 1,
        );
      }
    }
  }

  for (
    const [route, incomingCount]
    of incomingLinks
  ) {
    if (incomingCount === 0) {
      results.orphanedDocuments.push(
        relativeFile(
          routeToFile.get(route),
        ),
      );
    }
  }
}

/*
 * Normalize a documentation title for comparison.
 */
function normaliseTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/*
 * Convert a title into meaningful word tokens.
 */
function titleTokens(title) {
  return new Set(
    normaliseTitle(title)
      .split(" ")
      .filter(
        (token) =>
          token.length > 1 &&
          !TITLE_STOP_WORDS.has(token),
      ),
  );
}

/*
 * Calculate Jaccard similarity between two documentation titles.
 *
 * similarity =
 * intersection(tokens A, tokens B)
 * --------------------------------
 * union(tokens A, tokens B)
 */
function calculateJaccardSimilarity(
  titleA,
  titleB,
) {
  const tokensA = titleTokens(titleA);
  const tokensB = titleTokens(titleB);

  if (
    tokensA.size === 0 ||
    tokensB.size === 0
  ) {
    return 0;
  }

  const intersection = new Set(
    [...tokensA].filter((token) =>
      tokensB.has(token),
    ),
  );

  const union = new Set([
    ...tokensA,
    ...tokensB,
  ]);

  return (
    intersection.size / union.size
  );
}

/*
 * Analyse documentation titles for exact duplicates and
 * highly similar titles.
 *
 * Exact duplicates are reported separately because they are
 * objective matches after normalization.
 *
 * Similar titles are informational and require human review.
 */
function analyseTitleSimilarity(files) {
  const documents = [];

  for (const file of files) {
    const content = fs.readFileSync(
      file,
      "utf8",
    );

    const frontmatter =
      extractFrontmatter(content);

    const title =
      getFrontmatterValue(
        frontmatter,
        "title",
      );

    if (title) {
      documents.push({
        file: relativeFile(file),
        title,
      });
    }
  }

  for (
    let i = 0;
    i < documents.length;
    i++
  ) {
    for (
      let j = i + 1;
      j < documents.length;
      j++
    ) {
      const first = documents[i];
      const second = documents[j];

      const normalisedFirst =
        normaliseTitle(first.title);

      const normalisedSecond =
        normaliseTitle(second.title);

      /*
       * Separate exact normalized duplicates from
       * fuzzy similarity results.
       */
      if (
        normalisedFirst ===
        normalisedSecond
      ) {
        results.duplicateTitles.push({
          first,
          second,
        });

        continue;
      }

      const similarity =
        calculateJaccardSimilarity(
          first.title,
          second.title,
        );

      if (
        similarity >=
        SIMILARITY_THRESHOLD
      ) {
        results.similarTitles.push({
          first,
          second,
          similarity,
        });
      }
    }
  }

  results.similarTitles.sort(
    (a, b) =>
      b.similarity - a.similarity,
  );
}

/*
 * Print a reusable report section.
 */
function printSection(
  title,
  items,
  formatter = (item) => item,
) {
  console.log(`\n${title}`);
  console.log(
    "-".repeat(title.length),
  );

  if (items.length === 0) {
    console.log("✓ None found");
    return;
  }

  for (const item of items) {
    console.log(
      `⚠ ${formatter(item)}`,
    );
  }
}

/*
 * Print the complete documentation analysis report.
 */
function printReport() {
  console.log(
    "\nDocumentation Search & Discoverability Analyzer",
  );

  console.log(
    "==============================================",
  );

  console.log(
    `\nDocuments analysed: ${results.totalDocuments}`,
  );

  printSection(
    `Missing descriptions (${results.missingDescription.length})`,
    results.missingDescription,
  );

  printSection(
    `Empty descriptions (${results.emptyDescription.length})`,
    results.emptyDescription,
  );

  printSection(
    `Missing titles (${results.missingTitle.length})`,
    results.missingTitle,
  );

  printSection(
    `Potentially weak titles (${results.weakTitles.length})`,
    results.weakTitles,
    (item) =>
      `${item.file}\n` +
      `  Title: "${item.title}"`,
  );

  console.log(
    `\nInternal documentation links: ${results.internalLinks}`,
  );

  printSection(
    `Potentially orphaned documents (${results.orphanedDocuments.length})`,
    results.orphanedDocuments,
  );

  printSection(
    `Exact duplicate titles (${results.duplicateTitles.length})`,
    results.duplicateTitles,
    (item) =>
      `"${item.first.title}"\n` +
      `  ${item.first.file}\n` +
      `  ${item.second.file}`,
  );

  printSection(
    `Potentially similar titles (${results.similarTitles.length})`,
    results.similarTitles,
    (item) =>
      `${Math.round(
        item.similarity * 100,
      )}% similarity\n` +
      `  "${item.first.title}"\n` +
      `  ${item.first.file}\n` +
      `  "${item.second.title}"\n` +
      `  ${item.second.file}`,
  );

  const metadataIssues =
    results.missingDescription.length +
    results.emptyDescription.length +
    results.missingTitle.length +
    results.weakTitles.length;

  console.log("\nSummary");
  console.log("-------");

  console.log(
    `Documents analysed: ${results.totalDocuments}`,
  );

  console.log(
    `Internal links found: ${results.internalLinks}`,
  );

  console.log(
    `Metadata discoverability issues: ${metadataIssues}`,
  );

  console.log(
    `Potentially orphaned documents: ${results.orphanedDocuments.length}`,
  );

  console.log(
    `Exact duplicate title pairs: ${results.duplicateTitles.length}`,
  );

  console.log(
    `Potentially similar title pairs: ${results.similarTitles.length}`,
  );
}

/*
 * Main execution.
 */
if (!fs.existsSync(DOCS_DIR)) {
  console.error(
    `Documentation directory not found: ${DOCS_DIR}`,
  );

  process.exit(1);
}

const documentationFiles =
  getDocumentationFiles(DOCS_DIR);

for (const file of documentationFiles) {
  analyseDocument(file);
}

analyseLinkGraph(documentationFiles);
analyseTitleSimilarity(documentationFiles);

printReport();