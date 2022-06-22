import React from "react";
import '../styles/styles.css';
import CardCities from '../components/CardCities';
import { useState, useEffect} from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';


function Cities (){

// const [cities,setCities] = useState()
const [search, setSearch] = useState('')
const dispatch = useDispatch();

useEffect(() => {
        dispatch(citiesActions.getCities())
 // eslint-disable-next-line 
},[])
const cities = useSelector(state => state.citiesReducer.cities)
return (
        <div className="main main-cities"> 
        <h2 className="title-cities">Find your City</h2>
                <input placeholder="Find your City" type="text" className="input" onKeyUp={(e) => {setSearch(e.target.value)}}></input>
                <CardCities input={search} cities={cities}/>
        </div>   
)
}

export default Cities