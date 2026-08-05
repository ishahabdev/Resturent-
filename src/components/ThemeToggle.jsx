import { memo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { IconMoon, IconSun } from './icons';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
      title={isLight ? 'Modo claro' : 'Modo escuro'}
    >
      {isLight ? <IconSun /> : <IconMoon />}
    </button>
  );
}

export default memo(ThemeToggle);
