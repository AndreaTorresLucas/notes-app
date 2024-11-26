import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';

interface HomeContentProps {
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
    selectedCareer: string;
    handleTabChange: (_: React.SyntheticEvent, newValue: number) => void;
}

const HomeContent = ({
    selectedTab,
    setSelectedTab,
    selectedCareer,
    handleTabChange,
}: HomeContentProps) => {


    const loadData = () => {
        switch (selectedTab) {
            case 0:
                return <Typography>Contenido de Primer Curso de {selectedCareer}</Typography>;
            case 1:
                return <Typography>Contenido de Segundo Curso de {selectedCareer}</Typography>;
            case 2:
                return <Typography>Contenido de Tercer Curso de {selectedCareer}</Typography>;
            case 3:
                return <Typography>Contenido de Cuarto Curso de {selectedCareer}</Typography>;
            default:
                return null;
        }
    };

    useEffect(() => {
        console.log('la selected career ha camiado a ', selectedCareer)
        setSelectedTab(0)
    }, [selectedCareer])


    return (
        <Box
            sx={{
                border: '1px solid white',
                backgroundColor: '#f1f2f3',
                borderRadius: '5px',
                flex: 1,
                height: '85%',
                padding: '10px'
            }}
        >
            {selectedCareer !== '' ?
                <div>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        sx={{
                            borderBottom: '1px solid #ccc',
                            marginBottom: '10px',
                            padding: '20px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#7db6df',
                            }
                        }}
                    >
                        <Tab sx={{
                            '&.Mui-selected': {
                                color: '#7db6df',
                            },
                            flexGrow: 1,
                            textAlign: 'center',
                        }} label="Primer Curso" />
                        <Tab sx={{
                            '&.Mui-selected': {
                                color: '#7db6df',
                            },
                            flexGrow: 1,
                            textAlign: 'center',
                        }} label="Segundo Curso" />
                        <Tab sx={{
                            '&.Mui-selected': {
                                color: '#7db6df',
                            },
                            flexGrow: 1,
                            textAlign: 'center',
                        }} label="Tercer Curso" />
                        <Tab sx={{
                            '&.Mui-selected': {
                                color: '#7db6df',
                            },
                            flexGrow: 1,
                            textAlign: 'center',
                        }} label="Cuarto Curso" />
                    </Tabs>

                    <Box sx={{ padding: '20px' }}>
                        {loadData()}
                    </Box>
                </div>
                :
                <Box sx={{ textAlign: 'center', padding:'50px', color: '#c0c0c0'}}>
                    <Typography sx={{fontSize: '50px'}}>Selecciona un grado para ver su contenido</Typography>
                    <NorthIcon  style={{height: '100px', width: '100px'}}/>
                    <NorthIcon  style={{height: '100px', width: '100px'}}/>
                    <NorthIcon  style={{height: '100px', width: '100px'}}/>
                </Box>
            }

        </Box>
    );
};

export default HomeContent;
