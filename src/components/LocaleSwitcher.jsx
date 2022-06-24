import { useTranslation } from 'react-i18next';

/**
 * Component used to change render the language select and change the language onClick
 * @component
 *
 * @returns
 */
export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <>
      <select
        className="navbarLocaleSwitcher"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </>
  );
}
