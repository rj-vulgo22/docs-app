import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(__dirname, '..', 'src', 'app', 'pages');

const snippets = {};

for (const dir of readdirSync(pagesDir, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const dirPath = join(pagesDir, dir.name);

  const files = readdirSync(dirPath).filter(f => f.endsWith('.ts') && (f.includes('.preview.') || f.includes('.example.')));

  for (const file of files) {
    const content = readFileSync(join(dirPath, file), 'utf-8');
    let key = 'default';
    const match = file.match(/--(\w+)\.example\./);
    if (match) key = match[1];

    if (!snippets[dir.name]) snippets[dir.name] = {};
    snippets[dir.name][key] = content;
  }
}

const outDir = join(__dirname, '..', 'public', 'data');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'primitives-snippets.json'), JSON.stringify(snippets, null, 2));

console.log(`Generated snippets for ${Object.keys(snippets).length} components`);
