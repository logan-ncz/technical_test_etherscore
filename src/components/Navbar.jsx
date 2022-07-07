import LocaleSwitcher from './LocaleSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

/**
 * Component used to render the Navbar
 * @component
 *
 * @param {*} props
 * @returns {}
 */
function Navbar(props) {
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
              {lightMode ? t('darkmodeBtn') : t('lightmodeBtn')}
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
      {props.children && props.children}
      <div className="navbarEnd">
        <LocaleSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
