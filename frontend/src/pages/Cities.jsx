import React from "react";
import '../styles/styles.css';
import CardCities from '../components/CardCities';
import { useState, useEffect} from 'react';


function Cities (){

const [cities,setCities] = useState()

useEffect(() => {
fetch("./data/cities.json")
.then(response =>response.json())
.then(data => setCities(data))
.catch(error => console.error(error))
},[])

return (
        <div className="main main-cities"> 
            <h2 className="title-cities">Find your City</h2>
                <CardCities cities={cities} />
        </div> 
)
}

export default Cities