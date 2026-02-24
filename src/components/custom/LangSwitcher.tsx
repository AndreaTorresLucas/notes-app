import { useTranslation } from 'react-i18next';

function LangSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button onClick={() => i18n.changeLanguage('es')}>
        ES
      </button>
      <button onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
    </div>
  );
}

export default LangSwitcher;