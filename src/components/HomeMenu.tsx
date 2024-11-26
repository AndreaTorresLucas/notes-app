import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
import { generalStyle } from '../styles/styles';
import { Add, InsertDriveFile } from '@mui/icons-material';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';



function HomeMenu() {

  const [selectedMenu, setSelectedMenu] = useState(1);

  const menuItems = [
    {
      id: 1,
      label: 'Todos los archivos',
      icon: <InventoryIcon fontSize="large" sx={{ height: '20px' }} />,
    },
    {
      id: 2,
      label: 'Perfil',
      icon: <PersonIcon fontSize="large" sx={{ height: '20px' }} />,
    },
    {
      id: 3,
      label: 'Mis archivos',
      icon: <FolderSpecialIcon fontSize="large" sx={{ height: '20px' }} />,
    },
  ];

  const handleAddFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const allowedExtensions = /(\.pdf|\.ppt|\.pptx|\.jpg|\.jpeg|\.png|\.gif)$/i;

      if (!allowedExtensions.exec(file.name)) {
        alert('Selecciona un archivo válido (PDF, PowerPoint o imagen).');
        return;
      }
      console.log('el archivo que se la seleccionado ha sido ', file.name);
    }
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div style={{ backgroundColor: '#373737', height: '100%', width: '50vh' }}>
      <div style={{ borderBottom: '2px solid #5c5c5c', display: 'flex', alignItems: 'center', padding: '25px', gap: '8px' }}>
        <Avatar style={{ height: '60px', width: '60px' }} />
        <Typography style={{ ...generalStyle.inputStyle, color: 'white' }}> Andrea Torres Lucas </Typography>
      </div>

      <Box sx={{ paddingTop: '15px' }}>
        {menuItems.map((item) => (
          <Box
            key={item.id}
            onClick={() => setSelectedMenu(item.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              padding: '10px',
              backgroundColor: selectedMenu === item.id ? '#7db6df' : 'transparent',
              color: selectedMenu === item.id ? 'white' : '#ccc',
              '&:hover': {
                backgroundColor: '#5b94bd',
              },
            }}
          >
            <Box sx={{ color: selectedMenu === item.id ? 'white' : '#ccc' }}>{item.icon}</Box>
            <Typography sx={{ fontSize: '12px' }}>{item.label}</Typography>
          </Box>
        ))}
      </Box>

      <div>
        <Box
          onClick={triggerFileInput}
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
          <Typography style={{ fontWeight: 'bold', marginTop: '8px' }}>Añadir archivo</Typography>
        </Box>

        <input
          id="file-input"
          type="file"
          accept=".pdf,.ppt,.pptx,image/*"
          style={{ display: 'none' }}
          onChange={handleAddFiles}
        />

      </div>
    </div>
  );
}

export default HomeMenu;
