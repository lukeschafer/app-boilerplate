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

const slateIndigo: Palette = {
  id: 'slate-indigo',
  name: 'Slate & Deep Indigo (Default)',
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
};

const slateSapphire: Palette = {
  id: 'slate-sapphire',
  name: 'Slate & Sapphire Blue',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#1e3a8a',
    textMuted: '#3b82f6',
    accent: '#2563eb',
    accentHover: '#1d4ed8',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#090d16',
    bgSecondary: '#0f172a',
    bgCard: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#93c5fd',
    textMuted: '#60a5fa',
    accent: '#3b82f6',
    accentHover: '#60a5fa',
    border: '#334155',
    borderHover: '#475569',
  },
};

const slateEmerald: Palette = {
  id: 'slate-emerald',
  name: 'Slate & Forest Emerald',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#064e3b',
    textMuted: '#059669',
    accent: '#10b981',
    accentHover: '#059669',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#090d16',
    bgSecondary: '#0f172a',
    bgCard: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#a7f3d0',
    textMuted: '#6ee7b7',
    accent: '#10b981',
    accentHover: '#34d399',
    border: '#334155',
    borderHover: '#475569',
  },
};

const slateAmber: Palette = {
  id: 'slate-amber',
  name: 'Slate & Warm Amber',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#78350f',
    textMuted: '#b45309',
    accent: '#d97706',
    accentHover: '#b45309',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#090d16',
    bgSecondary: '#0f172a',
    bgCard: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#fde68a',
    textMuted: '#fcd34d',
    accent: '#f59e0b',
    accentHover: '#fbbf24',
    border: '#334155',
    borderHover: '#475569',
  },
};

const slateViolet: Palette = {
  id: 'slate-violet',
  name: 'Slate & Royal Violet',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#4c1d95',
    textMuted: '#7c3aed',
    accent: '#8b5cf6',
    accentHover: '#7c3aed',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#090d16',
    bgSecondary: '#0f172a',
    bgCard: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#ddd6fe',
    textMuted: '#c4b5fd',
    accent: '#8b5cf6',
    accentHover: '#a78bfa',
    border: '#334155',
    borderHover: '#475569',
  },
};

export const PALETTES: Record<string, Palette> = {
  'slate-indigo': slateIndigo,
  'slate-sapphire': slateSapphire,
  'slate-emerald': slateEmerald,
  'slate-amber': slateAmber,
  'slate-violet': slateViolet,

  // Backwards-compatible aliases
  slate: slateIndigo,
  emerald: slateEmerald,
  obsidian: slateIndigo,
  sunset: slateAmber,
  oceanic: slateSapphire,
};
