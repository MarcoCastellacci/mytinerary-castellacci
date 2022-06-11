import React from 'react';
import Stack from '@mui/material/Stack';
import Fondo from '../img/slogan.gif';
import Box from '@mui/material/Box';
import {Link as RouterLink} from "react-router-dom";
import Title from '../img/mytinerary.png';



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
            }}>
        <img src={Title} alt="title" className="title-app"/>
        </Box>
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
        <Stack spacing={1} direction="row" className="btn-cities" sx={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px',
            margin: '0 auto',
}}>
        <RouterLink to={'/cities'} ><span className='btn-donate'>  All Cities  </span></RouterLink>  
        </Stack>    
        </Box>
        </>
);
}

export default CallToAction;