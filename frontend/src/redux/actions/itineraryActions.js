import axios from 'axios';

let urlApi = "http://localhost:4000/"

const itineraryActions = {
    getItinerary: (id) => { 
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(urlApi + `api/itinerarys/`)
                dispatch({type: "GET_ITINERARYS", payload: res.data})
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    },
    getItineraryByCity: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(urlApi + `api/itinerarys/city/${id}`)
                dispatch({type: "GET_ITINERARYS_BY_CITY", payload: res.data.response})
            } catch (error) {
                console.log(error)
            }
        }
    },
    createItinerary: (name, nameUser, imageUser, activities, price, time, like, hashtags, image, city) => {
        return async (dispatch, getState) => {
            try {
                await axios.post(urlApi + `api/itinerarys/`, {name, nameUser, imageUser, activities, price, time, like, hashtags, image, city})
            } catch (error) {
                console.log(error)
            }
        }
    },
    modifyItinerary: (id, itinerary) => {
        return async (dispatch, getState) => {
            try {
                await axios.put(urlApi + `api/itinerarys/${id}`, itinerary)
            } catch (error) {
                console.log(error)
            }   
        }
    },
    deleteItinerary: (id) => {
        return async (dispatch, getState) => {
            try {
            await axios.delete(urlApi + `api/itinerarys/${id}, `)
            } catch (error) {
                console.log(error)
            }
        }
    }, 
    addLikes: (id) => {
        return async (dispatch, getState) => {
            try {
            const res = await axios.put(urlApi + `api/itinerarys/likes/${id}`, {}, { headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}}
            
            )
            console.log(res);
            return res
            } catch (error) {
                console.log(error)
            }
        }
    },
}
export default itineraryActions