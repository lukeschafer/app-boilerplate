import { PALETTES, Palette } from '../theme/palettes';

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
  appName: 'Lumina App',
  appSlug: 'lumina-app',
  tagline: 'Streamlined edge-native platform',
  description: 'A minimalist, high-performance solution built on Cloudflare Workers and D1.',
  domain: 'luminaapp.com',
  supportEmail: 'support@luminaapp.com',
  paletteId: 'slate-indigo',
  defaultMode: 'dark',
  turnstileSiteKey: '1x00000000000000000000AA',
  turnstileSecretKey: '1x0000000000000000000000000000000AA',
  oidcClientId: 'lumina-client-id',
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
