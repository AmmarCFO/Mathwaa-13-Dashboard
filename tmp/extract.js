const fs = require('fs');

const jsContent = fs.readFileSync('/tmp/index.js', 'utf8');

// Search for Arabic text
const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+/g;
let match;
const matches = [];
while ((match = arabicRegex.exec(jsContent)) !== null) {
  const start = Math.max(0, match.index - 80);
  const end = Math.min(jsContent.length, match.index + match[0].length + 80);
  matches.push({
    word: match[0],
    context: jsContent.slice(start, end)
  });
}

console.log(`Found ${matches.length} Arabic occurrences.`);

// Let's filter unique contexts or save them
const uniqueContexts = [];
const seen = new Set();
for (const m of matches) {
  // Let's clean context a bit
  const cleaned = m.context.trim().replace(/\s+/g, ' ');
  if (!seen.has(cleaned)) {
    seen.add(cleaned);
    uniqueContexts.push(cleaned);
  }
}

fs.writeFileSync('/tmp/arabic_contexts.json', JSON.stringify(uniqueContexts.slice(0, 500), null, 2));
console.log('Saved 500 unique contexts to /tmp/arabic_contexts.json');
