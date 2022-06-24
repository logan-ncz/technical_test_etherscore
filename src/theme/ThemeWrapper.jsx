import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('lightMode');
        document
          .querySelector('.navbarDarkmodeBtn')
          .classList.add('lightModeBtn');
        document
          .querySelector('.navbarLocaleSwitcher')
          .classList.add('lightModeBtn');
        document
          .querySelector('.connectMetamaskBtn')
          .classList.add('lightModeConnectBtn');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('lightMode');
        document
          .querySelector('.navbarDarkmodeBtn')
          .classList.remove('lightModeBtn');
        document
          .querySelector('.navbarLocaleSwitcher')
          .classList.remove('lightModeBtn');
        document
          .querySelector('.connectMetamaskBtn')
          .classList.remove('lightModeConnectBtn');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
