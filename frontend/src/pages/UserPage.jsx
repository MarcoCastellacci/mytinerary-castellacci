import React from "react";
import UserProfile from '../components/UserProfile';
import { useSelector } from "react-redux";


function UserPage (){

const user = useSelector(store => store.userReducer.user);

return (
    <div className="main" >
        <UserProfile user={user} />
    </div>
)
}

export default UserPage;