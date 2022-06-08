import React from "react";
import Gif from '../img/baked.gif';
import '../styles/styles.css';


function LogIn (){
    return (
        <div className="main main-cities">
            <h2 className="title-cities">For Log in you must wait a little more</h2>
            <img src={Gif} alt="work in progess" className="gif-cities" />
        </div> 
)
}

export default LogIn;