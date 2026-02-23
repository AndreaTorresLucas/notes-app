import { useContext, useEffect } from 'react';
import { generalStyle } from '../styles/styles';
import { LoginContext } from '../App';
import { Box } from '@mui/material';
import auth from '../services/auth'; 
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext)!;
    const navigate = useNavigate();

    const handleLogout = async () => {
    await auth.logOut(); 
    setLoggedIn(false);         
    navigate("/", { replace: true }); 
    };

    return (
        <header style={{ ...generalStyle.headerStyle, position: 'relative', zIndex: 1, height: 'auto' }}>
            <a href="https://www.upct.es/">
                <img
                    src="https://www.upct.es/img/estructura/logo_upct.svg"
                    alt="upct-logo"
                    style={{ height: '40px', marginRight: '10px' }}
                />
            </a>
            <a href="https://teleco.upct.es/">
                <img
                    src="https://teleco.upct.es/themes/teleco/assets/img/teleco.png"
                    alt="etsit-logo"
                    style={{ height: '40px', marginRight: '10px' }}
                />
            </a>
            { loggedIn ? 
            <Box
              component="button"
              type="submit"
              onClick={handleLogout}
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
              Cerrar sesión
            </Box> : 
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
              Iniciar Sesion
            </Box>
            }
        </header>
    );
}

export default HeaderComponent;
