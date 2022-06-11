import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


function BtnBack() {
return(
        <div className='button'>
            <RouterLink to={'/cities'}>
                <span className='button-content'> Back to Cities
                </span>
            </RouterLink>    
        </div>
)
}

export default BtnBack;