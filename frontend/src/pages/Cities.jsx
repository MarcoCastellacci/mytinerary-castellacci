import React from "react";
import '../styles/styles.css';
import CardCities from '../components/CardCities';
import { useState, useEffect} from 'react';



function Cities (){

const [cities,setCities] = useState()
const [search, setSearch] = useState('')

useEffect(() => {
fetch("./data/cities.json")
.then(response =>response.json())
.then(data => {setCities(data)
data.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))
        setCities(data)
})
.catch(error => console.error(error))
},[search])

return (
        <div className="main main-cities"> 
            <h2 className="title-cities">Find your City</h2>
                <input placeholder="Find your City" type="text" className="input" onKeyUp={(e) => {setSearch(e.target.value)}}></input>
                <CardCities cities={cities}/>
        </div> 
)
}

export default Cities