const fs = require('fs');
const path = require('path');

const warningsFile = '/site/.vale/temp/vale-warnings.json';

// Load Vale JSON output
const data = JSON.parse(fs.readFileSync(warningsFile, 'utf8'));

for (const filePath in data) {
  const issues = data[filePath];

  // Sort highest to lowest line number so inserts don't shift later lines
  issues.sort((a, b) => b.Line - a.Line);

  const absPath = path.resolve(filePath);

  if (!fs.existsSync(absPath)) {
    console.error(`File not found: ${absPath}`);
    continue;
  }

  let lines = fs.readFileSync(absPath, 'utf8').split('\n');

  issues.forEach(issue => {
    const line = issue.Line;
    const check = issue.Check;
    const msg = issue.Message;

    const comment = `<!-- Vale(${check}): ${msg} -->`;

    // Insert comment above the offending line (line numbers are 1-based)
    lines.splice(line - 1, 0, comment);
  });

  fs.writeFileSync(absPath, lines.join('\n'));
  console.log(`Annotated: ${filePath}`);
}

console.log("Done!");