import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { lightBlue } from '@mui/material/colors';
import Fondo from '../img/slogan.gif';
import Box from '@mui/material/Box';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[500]),
  backgroundColor: lightBlue[500],
  '&:hover': {
    backgroundColor: lightBlue[100],
  },
}));
function CallToAction() {
    return (
        <>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'bottom',
            backgroundImage: 'url(' + Fondo + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            width: '100%',
            height: '50vh',
            margin: '5rem auto',
            marginTop: '-5rem',
}} >    
        
        <Stack spacing={1} direction="row" className="boton-cities" sx={{
            justifyContent: 'center',
            borderRadius: '50px',
            margin: '0 auto',
            marginBottom: '.5rem',
            marginTop: '1rem',
}}>
        <ColorButton variant="contained">All Cities</ColorButton>  
        </Stack>    
        </Box>
        </>
);
}

export default CallToAction;