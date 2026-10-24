import { useState } from 'react';
import { HiOutlineMoon, HiOutlineSparkles, HiOutlineSun } from 'react-icons/hi';

// Kept in step with the script in index.html, which applies the saved choice before the page paints.
const STORAGE_KEY = 'coa-theme';

const THEMES = [
  { id: 'classic', label: 'Classic', icon: HiOutlineSparkles },
  { id: 'dark', label: 'Dark', icon: HiOutlineMoon },
  { id: 'light', label: 'Light', icon: HiOutlineSun },
];

function currentTheme() {
  if (typeof document === 'undefined') return 'classic';
  return document.documentElement.getAttribute('data-theme') || 'classic';
}

/**
 * Three looks the visitor chooses between: Classic (dark first screen, light pages), Dark and Light.
 * The choice is remembered on the device; nothing is sent anywhere.
 */
// eslint-disable-next-line react/prop-types -- one optional boolean, no prop-types package in this project
const ThemeSwitcher = ({ labels = false }) => {
  const [theme, setTheme] = useState(currentTheme);

  const choose = (id) => {
    document.documentElement.setAttribute('data-theme', id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Private browsing or blocked storage: the theme still applies for this page view.
    }
    setTheme(id);
  };

  return (
    <div role="group" aria-label="Colour theme" className="inline-flex border border-ink-rule">
      {THEMES.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => choose(id)}
          aria-pressed={theme === id}
          aria-label={labels ? undefined : `${label} theme`}
          title={`${label} theme`}
          className={`flex min-h-[36px] min-w-[36px] items-center justify-center gap-2 border-r border-ink-rule px-2 font-mono text-xs uppercase tracking-[0.06em] transition-colors last:border-r-0 ${
            labels ? 'min-h-tap flex-1' : ''
          } ${theme === id ? 'bg-action text-action-ink' : 'text-ink-fg hover:text-ink-link'}`}
        >
          <Icon size={16} aria-hidden="true" />
          {labels && label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
