import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const outDir = join(rootDir, 'public', 'data');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

async function main() {
  // Generate ui-api.json
  console.log('Generating ui-api.json...');
  let uiApi = {};

  try {
    const { Project } = await import('ts-morph');
    const project = new Project();
    const brainDir = join(rootDir, 'node_modules', '@spartan-ng', 'brain');
    const helmDir = join(rootDir, 'src', 'app', 'components', 'ui');

    if (existsSync(brainDir)) {
      project.addSourceFilesAtPaths([join(brainDir, '**', '*.mjs')]);
    } else {
      console.log('  brain dir not found:', brainDir);
    }
    if (existsSync(helmDir)) {
      project.addSourceFilesAtPaths([join(helmDir, '**', '*.ts')]);
    } else {
      console.log('  helm dir not found:', helmDir);
    }

    for (const sourceFile of project.getSourceFiles()) {
      const filePath = sourceFile.getFilePath();
      if (filePath.includes('(components)')) continue;

      for (const cls of sourceFile.getClasses()) {
        const className = cls.getName();
        if (!className) continue;

        const decorator = cls.getDecorator(d => d.getName() === 'Component' || d.getName() === 'Directive');
        if (!decorator) continue;

        const info = { file: '', inputs: [], outputs: [], models: [], selector: null, exportAs: null };
        info.file = filePath.replace(rootDir, '').replace(/^\//, '');

        const args = decorator.getArguments();
        if (args.length > 0) {
          const objText = args[0].getText();
          const selMatch = objText.match(/selector\s*:\s*'([^']+)'/);
          if (selMatch) info.selector = selMatch[1];
          const expMatch = objText.match(/exportAs\s*:\s*'([^']+)'/);
          if (expMatch) info.exportAs = expMatch[1];
        }

        for (const prop of cls.getProperties()) {
          const name = prop.getName();
          const type = prop.getTypeNode()?.getText() || prop.getType().getText() || 'unknown';
          const decorators = prop.getDecorators();
          const inputDec = decorators.find(d => d.getName() === 'Input');
          const outputDec = decorators.find(d => d.getName() === 'Output');

          if (inputDec) {
            info.inputs.push({ name, type, description: '', defaultValue: null, required: false });
          } else if (outputDec) {
            info.outputs.push({ name, type, description: '' });
          }
        }

        if (info.inputs.length || info.outputs.length || info.models.length || info.selector || info.exportAs) {
          let primitive = null;
          if (filePath.includes('@spartan-ng/brain')) {
            const m = filePath.match(/brain[\\/]([^\\/]+)/);
            if (m) primitive = m[1];
          } else if (filePath.includes('components/ui')) {
            const m = filePath.match(/components[\\/]ui[\\/]([^\\/]+)/);
            if (m) primitive = m[1];
          }
          if (!primitive) continue;

          const libType = filePath.includes('@spartan-ng/brain') ? 'brain' : 'helm';
          if (!uiApi[primitive]) uiApi[primitive] = {};
          if (!uiApi[primitive][libType]) uiApi[primitive][libType] = {};
          uiApi[primitive][libType][className] = info;
        }
      }
    }
  } catch (e) {
    console.error('  ts-morph error:', e.message);
  }

  writeFileSync(join(outDir, 'ui-api.json'), JSON.stringify(uiApi, null, 2));
  console.log(`  Wrote ${Object.keys(uiApi).length} primitives`);

  // Generate manual-install-snippets.json
  console.log('Generating manual-install-snippets.json...');
  const pagesDir = join(rootDir, 'src', 'app', 'pages');
  const manualInstall = {};

  for (const dir of readdirSync(pagesDir, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const dirPath = join(pagesDir, dir.name);
    const files = readdirSync(dirPath).filter(f => f.endsWith('.ts'));
    let combined = '';
    for (const file of files) {
      combined += `// ${file}\n${readFileSync(join(dirPath, file), 'utf-8')}\n\n`;
    }
    if (combined) manualInstall[dir.name] = { vega: combined };
  }

  // Add utils
  const utilsDir = join(rootDir, 'src', 'app', 'components', 'ui');
  let utilsCode = '';
  if (existsSync(utilsDir)) {
    for (const comp of readdirSync(utilsDir, { withFileTypes: true })) {
      if (!comp.isDirectory()) continue;
      const libDir = join(utilsDir, comp.name, 'src', 'lib');
      if (!existsSync(libDir)) continue;
      for (const f of readdirSync(libDir, { withFileTypes: true })) {
        if (f.isFile() && f.name.endsWith('.ts')) {
          utilsCode += `// ${comp.name}/src/lib/${f.name}\n${readFileSync(join(libDir, f.name), 'utf-8')}\n\n`;
        }
      }
    }
  }
  if (utilsCode) manualInstall['utils'] = { vega: utilsCode };

  writeFileSync(join(outDir, 'manual-install-snippets.json'), JSON.stringify(manualInstall, null, 2));
  console.log(`  Wrote ${Object.keys(manualInstall).length} primitives`);
}

main().catch(console.error);
