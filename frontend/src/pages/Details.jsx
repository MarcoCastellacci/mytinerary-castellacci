import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BtnBack from '../components/BtnBack';
import '../styles/styles.css';
import axios from 'axios';



function Details() {
const {id} = useParams();
const [cities,setCities] = useState()

useEffect(() => {
axios.get(`http://localhost:4000/api/cities/${id}`)
.then(response => setCities(response.data.response))
})
    return (
    <>
        {cities && 
        <div  className='main ' key={cities._id}>
            <div className="city-name">
            <h3>{cities.name}</h3>
            </div>
            <div className='image-detail'>
                <img src={cities.image} alt="my city" />
            </div>  
            <div className='description'>
                <p>{cities.info}</p>
            </div>
            <BtnBack />

        </div>
        }
    </>
);
}

export default Details;