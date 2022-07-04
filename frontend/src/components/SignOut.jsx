import React from "react";
import '../styles/ButtonLogOutStyle.css';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";


function SignOut() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
        function signOut() {
        dispatch(userActions.SignOutUser())
        navigate('/')
    }

    return (

        <>
            <button onClick={signOut}>
                <div>
                    <span>
                        <p>Sign Out</p>
                    </span>
                </div>
                <div>
                    <span>
                        <p>Bye bye</p>
                    </span>
                </div>
            </button>
        </>



    )
}
export default SignOut;