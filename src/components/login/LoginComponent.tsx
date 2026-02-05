import React from 'react';
import { loginStyle, generalStyle } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
  const navigate = useNavigate();

  const handleLogin = () => {
    //hacer comprobación del usuario
    navigate('/home');
  };

  return (
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
  );
}

export default LoginComponent;