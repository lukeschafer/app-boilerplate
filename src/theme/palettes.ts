export interface ThemeColors {
  bgPrimary: string;
  bgSecondary: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  border: string;
  borderHover: string;
}

export interface Palette {
  id: string;
  name: string;
  light: ThemeColors;
  dark: ThemeColors;
}

export const PALETTES: Record<string, Palette> = {
  slate: {
    id: 'slate',
    name: 'Slate & Indigo (Default)',
    light: {
      bgPrimary: '#f8fafc',
      bgSecondary: '#f1f5f9',
      bgCard: '#ffffff',
      textPrimary: '#0f172a',
      textSecondary: '#334155',
      textMuted: '#64748b',
      accent: '#6366f1',
      accentHover: '#4f46e5',
      border: '#e2e8f0',
      borderHover: '#cbd5e1',
    },
    dark: {
      bgPrimary: '#090d16',
      bgSecondary: '#0f172a',
      bgCard: '#1e293b',
      textPrimary: '#f8fafc',
      textSecondary: '#cbd5e1',
      textMuted: '#94a3b8',
      accent: '#6366f1',
      accentHover: '#818cf8',
      border: '#334155',
      borderHover: '#475569',
    },
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald & Mint',
    light: {
      bgPrimary: '#f0fdf4',
      bgSecondary: '#dcfce7',
      bgCard: '#ffffff',
      textPrimary: '#064e3b',
      textSecondary: '#047857',
      textMuted: '#059669',
      accent: '#10b981',
      accentHover: '#059669',
      border: '#bbf7d0',
      borderHover: '#86efac',
    },
    dark: {
      bgPrimary: '#022c22',
      bgSecondary: '#064e3b',
      bgCard: '#047857',
      textPrimary: '#ecfdf5',
      textSecondary: '#a7f3d0',
      textMuted: '#6ee7b7',
      accent: '#10b981',
      accentHover: '#34d399',
      border: '#065f46',
      borderHover: '#047857',
    },
  },
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian & Steel',
    light: {
      bgPrimary: '#fafafa',
      bgSecondary: '#f4f4f5',
      bgCard: '#ffffff',
      textPrimary: '#18181b',
      textSecondary: '#3f3f46',
      textMuted: '#71717a',
      accent: '#18181b',
      accentHover: '#27272a',
      border: '#e4e4e7',
      borderHover: '#d4d4d8',
    },
    dark: {
      bgPrimary: '#09090b',
      bgSecondary: '#121215',
      bgCard: '#18181b',
      textPrimary: '#fafafa',
      textSecondary: '#a1a1aa',
      textMuted: '#71717a',
      accent: '#fafafa',
      accentHover: '#e4e4e7',
      border: '#27272a',
      borderHover: '#3f3f46',
    },
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset & Amber',
    light: {
      bgPrimary: '#fffbeb',
      bgSecondary: '#fef3c7',
      bgCard: '#ffffff',
      textPrimary: '#78350f',
      textSecondary: '#92400e',
      textMuted: '#b45309',
      accent: '#f59e0b',
      accentHover: '#d97706',
      border: '#fde68a',
      borderHover: '#fcd34d',
    },
    dark: {
      bgPrimary: '#1c1917',
      bgSecondary: '#292524',
      bgCard: '#44403c',
      textPrimary: '#fef3c7',
      textSecondary: '#fde68a',
      textMuted: '#fcd34d',
      accent: '#f59e0b',
      accentHover: '#fbbf24',
      border: '#57534e',
      borderHover: '#78716c',
    },
  },
  oceanic: {
    id: 'oceanic',
    name: 'Oceanic & Teal',
    light: {
      bgPrimary: '#f0fdfa',
      bgSecondary: '#ccfbf1',
      bgCard: '#ffffff',
      textPrimary: '#134e4a',
      textSecondary: '#0f766e',
      textMuted: '#0d9488',
      accent: '#14b8a6',
      accentHover: '#0d9488',
      border: '#99f6e4',
      borderHover: '#5eead4',
    },
    dark: {
      bgPrimary: '#042f2e',
      bgSecondary: '#134e4a',
      bgCard: '#0f766e',
      textPrimary: '#f0fdfa',
      textSecondary: '#99f6e4',
      textMuted: '#5eead4',
      accent: '#14b8a6',
      accentHover: '#2dd4bf',
      border: '#115e59',
      borderHover: '#0f766e',
    },
  },
};
