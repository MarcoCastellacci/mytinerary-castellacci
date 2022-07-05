import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import Stack from '@mui/material/Stack';

function SignOut() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function signOut() {
        dispatch(userActions.SignOutUser())
        navigate('/')
    }

    return (

        <>
            <Stack onClick={signOut} spacing={1} direction="row" className="btn-cities" sx={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                margin: '0 auto',
            }}>
                <RouterLink to={'/'} >
                    <span className='btn-donate'>
                        See you soon!
                    </span></RouterLink>
            </Stack>
        </>
    )
}
export default SignOut;