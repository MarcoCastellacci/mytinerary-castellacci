import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';



function BtnCities() {
return(
        <Stack spacing={1} direction="row" className="btn-cities" sx={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px',
            margin: '0 auto',
            }}>
        <RouterLink to={'/cities'} >
            <span className='btn-donate'>
                Clicl to see ALL CITIES!!!!  
            </span></RouterLink>  
        </Stack>
    )
}

export default BtnCities;