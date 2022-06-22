import axios from 'axios';

let urlApi = "http://localhost:4000/"

const itineraryActions = {
    getItinerary: (id) => { 
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(urlApi + `api/itinerarys/`)
                dispatch({type: "GET_ITINERARYS", payload: res.data})
            } catch (error) {
                console.log(error)
            }
        }
    },
    getItineraryByCity: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(urlApi + `api/itinerarys/${id}`)
                dispatch({type: "GET_ITINERARYS", payload: res.data})
            } catch (error) {
                console.log(error)
            }
        }
    }






}