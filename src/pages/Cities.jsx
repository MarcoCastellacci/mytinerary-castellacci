import React from "react";
import '../styles/styles.css';
import Gif from '../img/baked.gif'


function Cities (){
return (
        <div className="main main-cities"> 
            <h2 className="title-cities">Here the cities will go</h2>
            <img src={Gif} alt="work in progess" className="gif-cities" />
        </div> 
)
}

export default Cities