import React, {useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions';


function GoogleSignUp(props) {
    console.log(props)
    const dispatch = useDispatch();


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
}

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize ({
            client_id: '424914064088-0h31c9uc6ufvjcjl8eou061pc52j4nnm.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById('googleButton'),
            { theme: "otuline", size: "standard" }
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