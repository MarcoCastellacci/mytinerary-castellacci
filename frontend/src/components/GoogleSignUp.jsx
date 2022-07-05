import React, {useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {useDispatch , useSelector} from 'react-redux';
import userActions from '../redux/actions/userActions';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function GoogleSignUp(props) {
    console.log(props)
    const navigate = useNavigate()
    const dispatch = useDispatch();
const res = useSelector(store => store.userReducer.user);
console.log(res?.data)
    async function handleCallbackResponse(response) {
        const userObject = jwt_decode(response.credential)
        console.log(userObject);
            dispatch(userActions.signUp({
                name: userObject.given_name,
                lastName: userObject.family_name,
                image: userObject.picture,
                email: userObject.email,
                password: userObject.sub,
                country: props.country,
                from: 'google'
                }
            )) 
    const errormsg = res.data.message
    console.log(errormsg)
    if (res.data.from === "validator") {
        errormsg.forEach(e => {
            toast.error(e.message)
        })
    }
    if (res.data?.from === "signup") {
        if (res.data.success) {
            toast.success(res.data.message)
                navigate('/signin')
        } else {
            toast.error(res.data.message)
        }
    }
}

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize ({
            client_id: '424914064088-0h31c9uc6ufvjcjl8eou061pc52j4nnm.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById('googleButton'),
            { theme: "otuline", size: "standard", locale:'en', width: '50%'}
            )
     // eslint-disable-next-line
    },[])

    return (
        <>  
        <div>
            <div id='googleButton'></div>
        </div>
        </>
    )
}

export default GoogleSignUp;