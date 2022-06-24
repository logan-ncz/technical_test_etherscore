import LocaleSwitcher from './LocaleSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function Navbar() {
  const { t } = useTranslation();

  const [lightMode, setLightMode] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbarDarkmode">
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              className="navbarDarkmodeBtn"
              onClick={() => {
                setLightMode(!lightMode);
                changeTheme(lightMode ? themes.light : themes.dark);
              }}
            >
              {t('darkmodeBtn')}
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
      <div className="navbarEnd">
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
