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

function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function getTerminalColorDepth() {
  if (process.env.NO_COLOR) return 1;
  if (process.env.FORCE_COLOR) {
    const val = parseInt(process.env.FORCE_COLOR, 10);
    if (val === 3) return 24;
    if (val === 2) return 8;
    if (val === 1) return 4;
    if (val === 0) return 1;
  }
  if (typeof process.stdout.getColorDepth === 'function') {
    return process.stdout.getColorDepth();
  }
  return process.stdout.isTTY ? 4 : 1;
}

function rgbTo256(r, g, b) {
  if (r === g && g === b) {
    if (r < 8) return 16;
    if (r > 248) return 231;
    return Math.round(((r - 8) / 247) * 24) + 232;
  }
  const ansiR = Math.round((r / 255) * 5);
  const ansiG = Math.round((g / 255) * 5);
  const ansiB = Math.round((b / 255) * 5);
  return 16 + 36 * ansiR + 6 * ansiG + ansiB;
}

function colorSwatch(hexColor) {
  const depth = getTerminalColorDepth();
  const { r, g, b } = hexToRgb(hexColor);

  if (depth >= 24) {
    return `\x1b[38;2;${r};${g};${b}m██\x1b[0m`;
  } else if (depth >= 8) {
    const code = rgbTo256(r, g, b);
    return `\x1b[38;5;${code}m██\x1b[0m`;
  } else if (depth >= 4) {
    const code = (r > 128 ? 1 : 0) | (g > 128 ? 2 : 0) | (b > 128 ? 4 : 0);
    const ansiCode = 30 + (code === 0 ? 0 : code);
    return `\x1b[${ansiCode}m██\x1b[0m`;
  }
  return `[ ${hexColor} ]`;
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

  const paletteOptions = [
    { id: 'slate-indigo', name: 'Slate & Deep Indigo (Default)', accent: '#6366f1' },
    { id: 'slate-sapphire', name: 'Slate & Sapphire Blue', accent: '#2563eb' },
    { id: 'slate-emerald', name: 'Slate & Forest Emerald', accent: '#10b981' },
    { id: 'slate-amber', name: 'Slate & Warm Amber', accent: '#d97706' },
    { id: 'slate-violet', name: 'Slate & Royal Violet', accent: '#8b5cf6' },
    { id: 'slate-rose', name: 'Slate & Velvet Rose', accent: '#f43f5e' },
    { id: 'slate-cyan', name: 'Slate & Electric Cyan', accent: '#06b6d4' },
    { id: 'slate-coral', name: 'Slate & Sunset Coral', accent: '#f97316' },
    { id: 'zinc-purple', name: 'Zinc Dark & Electric Violet', accent: '#a855f7' },
    { id: 'midnight-sky', name: 'Midnight Navy & Sky Blue', accent: '#0284c7' },
    { id: 'sandstone-amber', name: 'Warm Sandstone & Bronze Amber', accent: '#d97706' },
    { id: 'charcoal-teal', name: 'Deep Charcoal & Mint Teal', accent: '#0d9488' },
    { id: 'obsidian-ruby', name: 'Pure Obsidian & Crimson Ruby', accent: '#e11d48' },
    { id: 'nordic-frost', name: 'Nordic Ice Gray & Glacier Cyan', accent: '#0891b2' },
    { id: 'plum-fuchsia', name: 'Deep Aubergine & Electric Fuchsia', accent: '#c026d3' },
  ];

  console.log('\nAvailable Color Palettes (Slate & Non-Slate Base Options):');
  paletteOptions.forEach((opt, idx) => {
    const numStr = String(idx + 1).padStart(2, ' ');
    const swatch = colorSwatch(opt.accent);
    console.log(`  ${numStr}) ${swatch} ${opt.id.padEnd(16)} - ${opt.name}`);
  });

  const paletteChoice = await ask('\n6. Select Palette (1-15 or key)', 'slate-indigo');
  const paletteMap = {};
  paletteOptions.forEach((opt, idx) => {
    paletteMap[String(idx + 1)] = opt.id;
  });
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
  const palette: Palette = PALETTES[paletteId] || PALETTES['slate-indigo'] || PALETTES['slate'];
  const activeMode = mode === 'light' ? 'light' : 'dark';
  const colors = palette ? palette[activeMode] : (PALETTES['slate-indigo'] || PALETTES['slate']).dark;
  const root = document.documentElement;

  if (colors) {
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

  log('INFO', 'Updating index.html SEO metadata...');
  const indexPath = path.join(ROOT, 'index.html');
  if (fs.existsSync(indexPath)) {
    let indexHtml = fs.readFileSync(indexPath, 'utf8');
    indexHtml = indexHtml.replace(/<title>.*<\/title>/, `<title>${appName} - ${tagline}</title>`);
    indexHtml = indexHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`);
    fs.writeFileSync(indexPath, indexHtml);
  }

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
