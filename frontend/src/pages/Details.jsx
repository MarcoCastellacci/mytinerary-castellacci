import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BtnBack from '../components/BtnBack';
import '../styles/styles.css';



function Details() {
const {id} = useParams();

const [cities,setCities] = useState()

useEffect(() => {
fetch("https://62a395985bd3609cee6cceb8.mockapi.io/api/cities" )
.then(response => response.json())
.then(data => setCities(data.cities.filter(city => city.id === id)))
},)

    return (
    <>
        {cities && cities.map(city => 
        <div  className='main ' key={id}>   
            <div className="city-name">
            <h3>{city.name}</h3>
            </div>
            <div className='image-detail'>
                <img src={city.image} alt="my city" />
            </div>  
            <div className='description'>
                <p>{city.info}</p>
            </div>
            <BtnBack />

        </div>
        )}
    </>
);
}

export default Details;