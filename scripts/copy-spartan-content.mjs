import { readdirSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const SPARTAN_ROOT = '/home/matheusmoraesgemini2024/AgentWeb/spartan/apps/app/src/app';
const OUR_PAGES = '/home/matheusmoraesgemini2024/AgentWeb/docs-app/src/app/pages';

const COMPONENT_SRC = join(SPARTAN_ROOT, 'pages/(components)/components');

const dirs = readdirSync(COMPONENT_SRC, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

for (const dir of dirs) {
  const srcDir = join(COMPONENT_SRC, dir);
  const simpleName = dir.replace(/^\(|\)$/g, '');
  const destDir = join(OUR_PAGES, simpleName);
  
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }
  
  const files = readdirSync(srcDir).filter(f => f.endsWith('.ts'));
  for (const file of files) {
    const srcFile = join(srcDir, file);
    const destFile = join(destDir, file);
    let content = readFileSync(srcFile, 'utf-8');

    // 1. Fix relative imports from 4 levels deep: ../../../../shared/ -> ../../shared/ and ../../../../core/ -> ../../core/
    content = content.replace(/\.\.\/\.\.\/\.\.\/\.\.\/shared\//g, '../../shared/');
    content = content.replace(/\.\.\/\.\.\/\.\.\/\.\.\/core\//g, '../../core/');

    // 2. Fix cross-component @spartan-ng/app paths
    content = content.replace(
      /from '@spartan-ng\/app\/app\/pages\/\(components\)\/components\/\(([^)]+)\)\/([^']+)'/g,
      (match, compName, fileName) => {
        if (compName === simpleName) return `from './${fileName}'`;
        return `from '../${compName}/${fileName}'`;
      }
    );

    // 3. Fix relative cross-component paths with parentheses: ../(COMP)/FILE
    content = content.replace(
      /from '\.\.\/\(([^)]+)\)\/([^']+)'/g,
      (match, compName, fileName) => {
        if (compName === simpleName) return `from './${fileName}'`;
        return `from '../${compName}/${fileName}'`;
      }
    );

    // 4. Remove AnalogJS RouteMeta import (both `type` and non-type)
    content = content.replace(/import (type )?\{ RouteMeta \} from '@analogjs\/router';\n?/g, '');

    // 5. Replace `export const routeMeta: RouteMeta = {` -> `export const routeData = {`
    content = content.replace(/export const routeMeta: RouteMeta = \{/g, 'export const routeData = {');
    content = content.replace(/^export const routeMeta = \{$/gm, 'export const routeData = {');

    // 6. Change `export default class` to `export class` (Angular router uses named exports)
    content = content.replace(/^export default class /gm, 'export class ');

    // 7. Fix ngx-scrollbar references (not compatible with Angular 21)
    if (content.includes('ngx-scrollbar')) {
      content = content.replace(/import \{ NgScrollbarModule \} from 'ngx-scrollbar';\n?/g, '');
      content = content.replace(/, NgScrollbarModule/g, '');
    }
    // Fix NodeJS.Timeout -> ReturnType<typeof setTimeout>
    content = content.replace(/NodeJS\.Timeout/g, 'ReturnType<typeof setTimeout>');

    writeFileSync(destFile, content, 'utf-8');
  }
}

console.log(`Copied and fixed ${dirs.length} component directories`);

// Verify
let analogCount = 0, sharedRelativeCount = 0, crossRefCount = 0;
for (const dir of dirs) {
  const simpleName = dir.replace(/^\(|\)$/g, '');
  const destDir = join(OUR_PAGES, simpleName);
  const files = readdirSync(destDir).filter(f => f.endsWith('.ts'));
  for (const file of files) {
    const content = readFileSync(join(destDir, file), 'utf-8');
    if (content.includes('@analogjs')) analogCount++;
    if (content.includes('../../../../shared/')) sharedRelativeCount++;
    if (content.includes("@spartan-ng/app/app/pages/")) crossRefCount++;
  }
}
console.log(`Files still referencing @analogjs: ${analogCount}`);
console.log(`Files with bad shared relative paths: ${sharedRelativeCount}`);
console.log(`Files with bad cross-refs: ${crossRefCount}`);
