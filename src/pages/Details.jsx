import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Details() {
// const [cities,setCities] = useState()

// useEffect(() => {
// fetch("./data/cities.json")
// .then(response =>response.json())
// .then(data => setCities(data))
// .catch(error => console.error(error))
// },[])

const {id} = useParams();

    return (
    <>
        {/* {cities && cities.map(city =>  */}
        <div className='main' key={id}>
            <h1>Details</h1>  
            <p>Aqui el detalles de la Ciudad {id}</p>
        </div>
    </>
);
}

export default Details;