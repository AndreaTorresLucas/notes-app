import React, { useState } from 'react';
import HomeMenu from '../components/HomeMenu';
import { Box, Typography, Tabs, Tab, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import HomeContent from '../components/HomeContent';

function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCareer, setSelectedCareer] = useState('');

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  const handleCareerChange = (event: SelectChangeEvent) => {
    setSelectedCareer(event.target.value);
  };


  console.log('la selected carrer es ', selectedCareer)
  return (
    <div style={{ backgroundColor: '#d1d2d3', height: '100vh', display: 'flex' }}>
      <div>
        <HomeMenu />
      </div>
      <div style={{ padding: '30px', width: '100%' }}>
        <Box sx={{
          marginBottom: '20px', flex: 1,
          height: '10%',
        }}>
          <Select
            value={selectedCareer}
            onChange={(e) => {
              handleCareerChange(e)
            }}
            displayEmpty
            sx={{
              width: '100%',
              backgroundColor: 'white',
            }}
          >
            <MenuItem value="" disabled><em>Selecciona una carrera: </em></MenuItem>
            <MenuItem value="Ingeniería Telemática">Ingeniería Telemática</MenuItem>
            <MenuItem value="Ingeniería Mecánica">Ingeniería Mecánica</MenuItem>
            <MenuItem value="Arquitectura">Arquitectura</MenuItem>
            <MenuItem value="Ingeniería de Telecomunicaciones">Ingeniería de Telecomunicaciones</MenuItem>
            <MenuItem value="Ingeniería Naval">Ingeniería Naval</MenuItem>
          </Select>
        </Box>
        <HomeContent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          selectedCareer={selectedCareer}
          handleTabChange={handleTabChange}
         
        />
      </div>
    </div>
  );
}

export default Home;
