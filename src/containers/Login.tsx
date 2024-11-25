import React from 'react';
import { loginStyle, generalStyle } from '../styles/styles';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    //hacer comprobación del usuario
    navigate('/home');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column',
      backgroundImage: 'url("https://rucampuscartuja.es/wp-content/uploads/2021/11/coger-apuntes.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
     }}>
      <header style={{ ...generalStyle.headerStyle, position: 'relative', zIndex: 1 }}>
        <a href="https://www.upct.es/">
          <img
            src="https://www.upct.es/img/estructura/logo_upct.svg"
            alt="upct-logo"
            style={{ height: '80px', marginRight: '10px' }}
          />
        </a>
        <a href="https://teleco.upct.es/">
          <img
            src="https://teleco.upct.es/themes/teleco/assets/img/teleco.png"
            alt="etsit-logo"
            style={{ height: '80px', marginRight: '10px' }}
          />
        </a>
      </header>

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

      <footer style={{
        ...generalStyle.footerStyle,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <p>&copy; 2024 Andrea Torres Lucas | <a href="mailto:andrea.torresl@edu.upct.es">andrea.torresl@edu.upct.es</a></p>
      </footer>
    </div>
  );
}

export default Login;
