/** @type {import('tailwindcss').Config} */

/**
 * CodeOn Africa's own colours, taken from the logo: royal blue (the continent), cyan ("CODE") and the deep ink of the
 * footer. Neutrals are theme variables (src/index.css), so the Classic, Dark and Light themes re-colour every page.
 *
 *   brand   #0048A8  headings and links on light ground
 *   action  #00B0D0  the one main action per screen, always with ink text on it (7.6:1)
 *   ink     the dark "technical grid" sections: navy in Classic and Dark, light in Light
 */
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0048A8', 50: '#EAF1FB', 100: '#CFE0F6', 600: '#003D8F', 700: '#003276' },
        action: { DEFAULT: '#00B0D0', 600: '#0098B4', ink: '#03113F' },
        deep: '#03113F',
        background: v('background'),
        foreground: v('foreground'),
        card: v('card'),
        muted: { DEFAULT: v('muted'), foreground: v('muted-foreground') },
        border: v('border'),
        heading: v('heading'),
        ink: {
          bg: 'var(--ink-bg)',
          head: 'var(--ink-head)',
          fg: 'var(--ink-fg)',
          dim: 'var(--ink-dim)',
          rule: 'var(--ink-rule)',
          strong: 'var(--ink-rule-strong)',
          cell: 'var(--ink-cell)',
          soft: 'var(--ink-soft)',
          link: 'var(--ink-link)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      minHeight: { tap: '44px' },
    },
  },
  plugins: [],
};
