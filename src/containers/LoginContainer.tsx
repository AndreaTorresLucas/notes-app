import React from 'react';
import { loginStyle, generalStyle } from '../styles/styles';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import LoginComponent from '../components/login/LoginComponent';

function LoginContainer() {
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
      <LoginComponent />
      <FooterComponent />
    </div>
  );
}

export default LoginContainer;
