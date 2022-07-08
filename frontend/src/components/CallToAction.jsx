import React from 'react';
import Fondo from '../img/slogan.gif';
import Box from '@mui/material/Box';
import Title from '../img/mytinerary.png';
import BtnCities from './BtnCities';



function CallToAction() {
    return (
        <>
        <Box sx={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '90vw',
            height: '20vh',
            margin: '5rem auto',
            marginTop: '1rem',
            marginTop: { xl: '8rem'},
            }}>
            <img src={Title} alt="title" className="title-app"/>
        </Box>
            <BtnCities />
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90vw',
            height: '50vh',
            margin: '2rem auto',
            marginTop: '2rem',
}} >    
        
        <img src={Fondo} alt="fondo" className="title-app" />
            
        </Box>
        </>
);
}

export default CallToAction;