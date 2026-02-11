import React, { useEffect, useState } from 'react';
import { loginStyle, generalStyle } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import loginService from '../../services/login';
import { TokenResponse, User } from '../../types/types';
import { Box } from '@mui/material';


function LoginComponent() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  const [userLogin, setUserLogin] = useState<User | null>(null);
  const [tokenInfo, setTokenInfo] = useState<TokenResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
   
  }, [])

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    try {
    const user = await loginService.logIn(formValues)
    console.log("Info USUARIO: ", user)
    setUserLogin(user.user)
    setTokenInfo(user.tokenInfo)
    navigate('/home');
    } catch (error) {
      setErrorMessage("La contraseña o el correo no son correctos")
      setTimeout(() => {
        setErrorMessage("")
      }, 5000)
    }

  };

  return (
      <div style={loginStyle.loginContainerStyle}>
        <div style={{ ...loginStyle.loginBoxStyle }}>
          <h1>Iniciar Sesión</h1>
          {errorMessage && (
            <p style={{...generalStyle.errorTextStyle}}>
              {errorMessage}
            </p>
          )}
          <form onSubmit={handleLoginSubmit}>
            <input type="text" placeholder="Email de usuario" style={{ ...generalStyle.inputStyle, boxSizing: 'border-box' }} 
            value={formValues.email}
            onChange={(event) => setFormValues({...formValues, email: event.target.value})}
            />
            <input type="password" placeholder="Contraseña" style={{ ...generalStyle.inputStyle, boxSizing: 'border-box' }}
            value={formValues.password}
            onChange={(event) => setFormValues({...formValues, password: event.target.value})}
            />
            <Box
              component="button"
              type="submit"
              sx={{
                ...generalStyle.buttonBoxStyle,
                border: '5px',
                backgroundColor: '#7db6df',
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#5b94bd',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }
              }}
            >
              Iniciar sesión
            </Box>
          </form>
        </div>
      </div>
  );
}

export default LoginComponent;