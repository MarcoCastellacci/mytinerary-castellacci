import React from 'react';
import { useParams } from 'react-router-dom';

import BtnBack from '../components/BtnBack';
import '../styles/styles.css';

import { useEffect } from 'react';
import Itinerarys from '../components/Itinerarys';
import { useSelector } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import { useDispatch } from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';


function Details() {
const {id} = useParams();
const dispatch = useDispatch();

    useEffect(() => {
        dispatch(citiesActions.getCity(id));
    // eslint-disable-next-line
    },[])

useEffect(() => {
    dispatch(itineraryActions.getItineraryByCity(id))
    // eslint-disable-next-line
    },[]) 
const cities = useSelector(store => store.citiesReducer.city);
console.log(cities)
const itinerary = useSelector(store => store.itineraryReducer.itineraryByCity);
console.log(itinerary)

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
            <div className='itinerary'>
            {itinerary.length > 0 ?
                itinerary.map(itinerary => (
            <Itinerarys itinerarys={itinerary} key={itinerary._id} />)):
                <div>
                    <h1> No Itineraries Yet </h1>
                </div>  
            }
            </div>
            <BtnBack />

        </div>
        }
    </>
);
}

export default Details;