import { loginStyle, generalStyle } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function LoginComponent() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = () => {
    //hacer comprobación del usuario
    navigate('/home');
  };

  return (
      <div style={loginStyle.loginContainerStyle}>
        <div style={{ ...loginStyle.loginBoxStyle }}>
          <h1>{t('login.title')}</h1>
          <input type="text" placeholder={t('login.email')} 
          style={{ ...generalStyle.inputStyle, boxSizing: 'border-box' }} />
          <input type="password" placeholder={t('login.password')} 
          style={{ ...generalStyle.inputStyle, boxSizing: 'border-box' }} />
          <button
            style={generalStyle.buttonStyle}
            onMouseOver={() => { }}
            onMouseOut={() => { }}
            onClick={handleLogin}
          >
            {t('login.title')}
          </button>
        </div>
      </div>
  );
}

export default LoginComponent;