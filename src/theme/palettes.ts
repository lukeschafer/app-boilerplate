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

const slateRose: Palette = {
  id: 'slate-rose',
  name: 'Slate & Velvet Rose',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#881337',
    textMuted: '#e11d48',
    accent: '#f43f5e',
    accentHover: '#e11d48',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#090d16',
    bgSecondary: '#0f172a',
    bgCard: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#fecdd3',
    textMuted: '#fda4af',
    accent: '#f43f5e',
    accentHover: '#fb7185',
    border: '#334155',
    borderHover: '#475569',
  },
};

const slateCyan: Palette = {
  id: 'slate-cyan',
  name: 'Slate & Electric Cyan',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#164e63',
    textMuted: '#0891b2',
    accent: '#06b6d4',
    accentHover: '#0891b2',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#090d16',
    bgSecondary: '#0f172a',
    bgCard: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#cffafe',
    textMuted: '#67e8f9',
    accent: '#06b6d4',
    accentHover: '#22d3ee',
    border: '#334155',
    borderHover: '#475569',
  },
};

const slateCoral: Palette = {
  id: 'slate-coral',
  name: 'Slate & Sunset Coral',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#7c2d12',
    textMuted: '#ea580c',
    accent: '#f97316',
    accentHover: '#ea580c',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#090d16',
    bgSecondary: '#0f172a',
    bgCard: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#ffedd5',
    textMuted: '#fdba74',
    accent: '#f97316',
    accentHover: '#fb923c',
    border: '#334155',
    borderHover: '#475569',
  },
};

const zincPurple: Palette = {
  id: 'zinc-purple',
  name: 'Zinc Dark & Electric Violet',
  light: {
    bgPrimary: '#fafafa',
    bgSecondary: '#f4f4f5',
    bgCard: '#ffffff',
    textPrimary: '#18181b',
    textSecondary: '#3f3f46',
    textMuted: '#71717a',
    accent: '#9333ea',
    accentHover: '#7e22ce',
    border: '#e4e4e7',
    borderHover: '#d4d4d8',
  },
  dark: {
    bgPrimary: '#09090b',
    bgSecondary: '#18181b',
    bgCard: '#27272a',
    textPrimary: '#fafafa',
    textSecondary: '#d4d4d8',
    textMuted: '#a1a1aa',
    accent: '#a855f7',
    accentHover: '#c084fc',
    border: '#3f3f46',
    borderHover: '#52525b',
  },
};

const midnightSky: Palette = {
  id: 'midnight-sky',
  name: 'Midnight Navy & Sky Blue',
  light: {
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgCard: '#ffffff',
    textPrimary: '#030712',
    textSecondary: '#1e293b',
    textMuted: '#0284c7',
    accent: '#0284c7',
    accentHover: '#0369a1',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#030712',
    bgSecondary: '#0b1329',
    bgCard: '#111c38',
    textPrimary: '#f8fafc',
    textSecondary: '#bae6fd',
    textMuted: '#7dd3fc',
    accent: '#38bdf8',
    accentHover: '#7dd3fc',
    border: '#1e293b',
    borderHover: '#334155',
  },
};

const sandstoneAmber: Palette = {
  id: 'sandstone-amber',
  name: 'Warm Sandstone & Bronze Amber',
  light: {
    bgPrimary: '#fdfbf7',
    bgSecondary: '#f5f0e6',
    bgCard: '#ffffff',
    textPrimary: '#1c1917',
    textSecondary: '#44403c',
    textMuted: '#78716c',
    accent: '#d97706',
    accentHover: '#b45309',
    border: '#e7e5e4',
    borderHover: '#d6d3d1',
  },
  dark: {
    bgPrimary: '#1c1917',
    bgSecondary: '#292524',
    bgCard: '#383532',
    textPrimary: '#fdfbf7',
    textSecondary: '#e7e5e4',
    textMuted: '#a8a29e',
    accent: '#f59e0b',
    accentHover: '#fbbf24',
    border: '#44403c',
    borderHover: '#57534e',
  },
};

const charcoalTeal: Palette = {
  id: 'charcoal-teal',
  name: 'Deep Charcoal & Mint Teal',
  light: {
    bgPrimary: '#f4f4f5',
    bgSecondary: '#e4e4e7',
    bgCard: '#ffffff',
    textPrimary: '#121212',
    textSecondary: '#27272a',
    textMuted: '#0d9488',
    accent: '#0d9488',
    accentHover: '#0f766e',
    border: '#e4e4e7',
    borderHover: '#d4d4d8',
  },
  dark: {
    bgPrimary: '#121212',
    bgSecondary: '#1e1e1e',
    bgCard: '#2a2a2a',
    textPrimary: '#f4f4f5',
    textSecondary: '#99f6e4',
    textMuted: '#2dd4bf',
    accent: '#14b8a6',
    accentHover: '#2dd4bf',
    border: '#27272a',
    borderHover: '#3f3f46',
  },
};

const obsidianRuby: Palette = {
  id: 'obsidian-ruby',
  name: 'Pure Obsidian & Crimson Ruby',
  light: {
    bgPrimary: '#ffffff',
    bgSecondary: '#f4f4f5',
    bgCard: '#ffffff',
    textPrimary: '#0a0a0a',
    textSecondary: '#262626',
    textMuted: '#dc2626',
    accent: '#e11d48',
    accentHover: '#be123c',
    border: '#e5e5e5',
    borderHover: '#d4d4d4',
  },
  dark: {
    bgPrimary: '#0a0a0a',
    bgSecondary: '#171717',
    bgCard: '#262626',
    textPrimary: '#ffffff',
    textSecondary: '#fecdd3',
    textMuted: '#fda4af',
    accent: '#f43f5e',
    accentHover: '#fb7185',
    border: '#262626',
    borderHover: '#404040',
  },
};

const nordicFrost: Palette = {
  id: 'nordic-frost',
  name: 'Nordic Ice Gray & Glacier Cyan',
  light: {
    bgPrimary: '#f0fdfa',
    bgSecondary: '#ccfbf1',
    bgCard: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#134e4a',
    textMuted: '#0f766e',
    accent: '#0891b2',
    accentHover: '#0e7490',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
  },
  dark: {
    bgPrimary: '#0f172a',
    bgSecondary: '#1e293b',
    bgCard: '#334155',
    textPrimary: '#f8fafc',
    textSecondary: '#a5f3fc',
    textMuted: '#67e8f9',
    accent: '#22d3ee',
    accentHover: '#67e8f9',
    border: '#334155',
    borderHover: '#475569',
  },
};

const plumFuchsia: Palette = {
  id: 'plum-fuchsia',
  name: 'Deep Aubergine & Electric Fuchsia',
  light: {
    bgPrimary: '#faf5ff',
    bgSecondary: '#f3e8ff',
    bgCard: '#ffffff',
    textPrimary: '#1e1b4b',
    textSecondary: '#581c87',
    textMuted: '#a21caf',
    accent: '#c026d3',
    accentHover: '#a21caf',
    border: '#e9d5ff',
    borderHover: '#d8b4fe',
  },
  dark: {
    bgPrimary: '#180e29',
    bgSecondary: '#271442',
    bgCard: '#391c5c',
    textPrimary: '#faf5ff',
    textSecondary: '#f5d0fe',
    textMuted: '#f0abfc',
    accent: '#e879f9',
    accentHover: '#f0abfc',
    border: '#4c1d95',
    borderHover: '#6b21a8',
  },
};

export const PALETTES: Record<string, Palette> = {
  'slate-indigo': slateIndigo,
  'slate-sapphire': slateSapphire,
  'slate-emerald': slateEmerald,
  'slate-amber': slateAmber,
  'slate-violet': slateViolet,
  'slate-rose': slateRose,
  'slate-cyan': slateCyan,
  'slate-coral': slateCoral,
  'zinc-purple': zincPurple,
  'midnight-sky': midnightSky,
  'sandstone-amber': sandstoneAmber,
  'charcoal-teal': charcoalTeal,
  'obsidian-ruby': obsidianRuby,
  'nordic-frost': nordicFrost,
  'plum-fuchsia': plumFuchsia,

  // Backwards-compatible aliases
  slate: slateIndigo,
  emerald: slateEmerald,
  obsidian: slateIndigo,
  sunset: slateAmber,
  oceanic: slateSapphire,
};
