import React from 'react';
import { loginStyle, generalStyle } from '../styles/styles';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    //hacer comprobación del usuario
    navigate('/home');
  };

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      backgroundImage: 'url("https://rucampuscartuja.es/wp-content/uploads/2021/11/coger-apuntes.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <HeaderComponent />
      <div style={loginStyle.loginContainerStyle}>
        <div style={{ ...loginStyle.loginBoxStyle }}>
          <h1>Iniciar Sesión</h1>
          <input type="text" placeholder="Usuario" style={{ ...generalStyle.inputStyle, boxSizing: 'border-box' }} />
          <input type="password" placeholder="Contraseña" style={{ ...generalStyle.inputStyle, boxSizing: 'border-box' }} />
          <button
            style={generalStyle.buttonStyle}
            onMouseOver={() => { }}
            onMouseOut={() => { }}
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Login;
