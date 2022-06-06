import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { lightBlue } from '@mui/material/colors';
import Fondo from '../img/fondo.gif';
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
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '50%',
            height: '20vh',
            borderRadius: '90px',
            margin: '5rem auto',
            marginTop: '-20rem',
}} >
        <Stack spacing={1} direction="row" sx={{
            justifyContent: 'center',
            borderRadius: '50px',
            margin: '0 auto',
            marginBottom: '.5rem',
}}>
        <ColorButton variant="contained">All Cities</ColorButton>  
        </Stack>     
        </Box>
        </>
);
}

export default CallToAction;