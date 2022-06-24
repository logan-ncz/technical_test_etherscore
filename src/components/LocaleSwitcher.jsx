import { useTranslation } from 'react-i18next';

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
