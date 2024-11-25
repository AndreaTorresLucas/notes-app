import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
import { generalStyle } from '../styles/styles';
import { Add, InsertDriveFile } from '@mui/icons-material';



function HomeMenu() {
  return (
    <div style={{ backgroundColor: '#373737', height: '100vh', width: '50vh' }}>
      <div style={{ borderBottom: '2px solid #5c5c5c', display: 'flex', alignItems: 'center', padding: '25px', gap: '8px' }}>
        <Avatar style={{ height: '60px', width: '60px' }} />
        <Typography style={{ ...generalStyle.inputStyle, color: 'white' }}> Andrea Torres Lucas </Typography>
      </div>
      <div>
      {/*   pestaña de 'todos los archivos' */}
      {/* pestaña de 'mi perfil' */}
      {/* pestaña de mis archivos */}
        <Box
          sx={{
            border: '1px solid #5c5c5c',
            backgroundColor: '#7db6df',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 1,
            padding: '20px',
            margin: '25px',
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#5b94bd',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Add fontSize="large" style={{ color: 'white', height: '25px' }} />
            <InsertDriveFile fontSize="large" style={{ color: 'white' }} />
          </div>
          <Typography style={{ marginTop: '8px' }}>Añadir archivo</Typography>
        </Box>
      </div>

    </div>
  );
}

export default HomeMenu;
