import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question, defaultValue = '') {
  return new Promise((resolve) => {
    const promptText = defaultValue ? `${question} [${defaultValue}]: ` : `${question}: `;
    rl.question(promptText, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

function log(type, msg) {
  console.log(`[${type}] ${msg}`);
}

async function runSetup() {
  console.log('====================================================');
  console.log('  MicroSaaS Application Configuration Wizard');
  console.log('====================================================\n');

  const appName = await ask('1. Enter Application Display Name', 'My App');
  const appSlug = appName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const tagline = await ask('2. Enter Application Tagline', 'The complete platform for your modern workflow');
  const description = await ask('3. Enter Short App Description', 'Streamline your operations, manage data securely, and optimize your business from one unified platform.');
  const domain = await ask('4. Enter Domain Name', `${appSlug}.com`);
  const supportEmail = await ask('5. Enter Target Support Email (backend notification recipient)', `support@${domain}`);

  console.log('\nAvailable Color Palettes (Slate Base with Custom Accents):');
  console.log('  1) [ #6366f1 ] slate-indigo   - Slate & Deep Indigo (Default)');
  console.log('  2) [ #2563eb ] slate-sapphire - Slate & Sapphire Blue');
  console.log('  3) [ #10b981 ] slate-emerald  - Slate & Forest Emerald');
  console.log('  4) [ #d97706 ] slate-amber    - Slate & Warm Amber');
  console.log('  5) [ #8b5cf6 ] slate-violet   - Slate & Royal Violet');

  const paletteChoice = await ask('6. Select Palette (1-5 or key)', 'slate-indigo');
  const paletteMap = {
    '1': 'slate-indigo',
    '2': 'slate-sapphire',
    '3': 'slate-emerald',
    '4': 'slate-amber',
    '5': 'slate-violet',
  };
  const paletteId = paletteMap[paletteChoice] || paletteChoice;

  const defaultMode = await ask('7. Default Theme Mode (light/dark)', 'dark');

  console.log('\nSecurity & Verification Configuration:');
  console.log('  (Press Enter to keep standard Cloudflare testing keys for local dev/branches)');
  const turnstileSiteKey = await ask('8. Cloudflare Turnstile Site Key', '1x00000000000000000000AA');
  const turnstileSecretKey = await ask('9. Cloudflare Turnstile Secret Key', '1x0000000000000000000000000000000AA');

  rl.close();

  log('INFO', 'Updating branding configuration file...');
  const brandingPath = path.join(ROOT, 'src', 'config', 'branding.ts');
  const brandingContent = `import { PALETTES, Palette } from '../theme/palettes';

export interface BrandingConfig {
  appName: string;
  appSlug: string;
  tagline: string;
  description: string;
  domain: string;
  supportEmail: string;
  paletteId: string;
  defaultMode: 'light' | 'dark';
  turnstileSiteKey: string;
  turnstileSecretKey: string;
  oidcClientId: string;
  oidcIssuerUrl: string;
}

export const BRANDING: BrandingConfig = {
  appName: '${appName.replace(/'/g, "\\'")}',
  appSlug: '${appSlug}',
  tagline: '${tagline.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
  domain: '${domain}',
  supportEmail: '${supportEmail}',
  paletteId: '${paletteId}',
  defaultMode: '${defaultMode === 'light' ? 'light' : 'dark'}',
  turnstileSiteKey: '${turnstileSiteKey}',
  turnstileSecretKey: '${turnstileSecretKey}',
  oidcClientId: '${appSlug}-client-id',
  oidcIssuerUrl: 'https://idpflare.com',
};

export function applyTheme(paletteId: string = BRANDING.paletteId, mode: 'light' | 'dark' = BRANDING.defaultMode) {
  const palette: Palette = PALETTES[paletteId] || PALETTES['slate-indigo'];
  const colors = palette[mode];
  const root = document.documentElement;

  root.style.setProperty('--bg-primary', colors.bgPrimary);
  root.style.setProperty('--bg-secondary', colors.bgSecondary);
  root.style.setProperty('--bg-card', colors.bgCard);
  root.style.setProperty('--text-primary', colors.textPrimary);
  root.style.setProperty('--text-secondary', colors.textSecondary);
  root.style.setProperty('--text-muted', colors.textMuted);
  root.style.setProperty('--accent', colors.accent);
  root.style.setProperty('--accent-hover', colors.accentHover);
  root.style.setProperty('--border', colors.border);
  root.style.setProperty('--border-hover', colors.borderHover);
}
`;
  fs.writeFileSync(brandingPath, brandingContent);

  log('INFO', 'Updating package.json project name...');
  const pkgPath = path.join(ROOT, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.name = appSlug;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  log('INFO', 'Updating wrangler.jsonc...');
  const wranglerPath = path.join(ROOT, 'wrangler.jsonc');
  let wranglerContent = fs.readFileSync(wranglerPath, 'utf8');
  wranglerContent = wranglerContent.replace(/"name":\s*"[^"]+"/, `"name": "${appSlug}"`);
  wranglerContent = wranglerContent.replace(/"database_name":\s*"[^"]+"/, `"database_name": "${appSlug}-db"`);
  fs.writeFileSync(wranglerPath, wranglerContent);

  log('INFO', 'Ensuring build directory (dist) exists for Wrangler assets binding...');
  const distPath = path.join(ROOT, 'dist');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  log('INFO', 'Updating documentation files...');
  const readmePath = path.join(ROOT, 'README.md');
  if (fs.existsSync(readmePath)) {
    let readme = fs.readFileSync(readmePath, 'utf8');
    readme = readme.replace(/# .*/, `# ${appName}`);
    fs.writeFileSync(readmePath, readme);
  }

  log('INFO', 'Attempting Cloudflare D1 provisioning via Wrangler...');
  try {
    const d1Output = execSync(`npx wrangler d1 create ${appSlug}-db`, { cwd: ROOT, encoding: 'utf8' });
    console.log(d1Output);
    const match = d1Output.match(/database_id\s*=\s*"([^"]+)"/);
    if (match && match[1]) {
      const dbId = match[1];
      log('SUCCESS', `Created D1 Database with ID: ${dbId}`);
      wranglerContent = wranglerContent.replace(/"database_id":\s*"[^"]+"/, `"database_id": "${dbId}"`);
      fs.writeFileSync(wranglerPath, wranglerContent);
    }
  } catch (err) {
    log('WARN', 'Cloudflare D1 creation skipped or requires wrangler login.');
  }

  log('INFO', 'Applying local database migration...');
  try {
    execSync(`npx wrangler d1 migrations apply ${appSlug}-db --local`, { cwd: ROOT, stdio: 'inherit' });
    log('SUCCESS', 'Local migrations applied successfully.');
  } catch (err) {
    log('WARN', 'Local migration step skipped.');
  }

  console.log('\n====================================================');
  log('SUCCESS', `Configuration setup complete for ${appName}!`);
  console.log('  Run "npm run dev" to launch your application.');
  console.log('====================================================\n');
}

runSetup().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});
