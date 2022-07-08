import axios from "axios";  

 let apiUrl = "https://mytinerary-castellacci.herokuapp.com/"
//let apiUrl = "http://localhost:4000/"

const citiesActions = {
    createCity: (name, country, info, image) => {
        return async (dispatch, getState) => {
            try {
                await axios.post(apiUrl + `api/city/`, {name, country, info, image})
            } catch (error) {
                console.log(error)
            }
        }
    },
    getCities: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(apiUrl + 'api/cities')
                dispatch({type: 'GET_CITIES', payload: res.data.response.cities
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    getCity: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(apiUrl + `api/cities/${id}`)
                dispatch({type: 'GET_CITY', payload: res.data.response})
            } catch (error) {
                console.log(error)
            }
        }
    },
    modifyCity: (id, city) => {
        return async (dispatch, getState) => {
            try {
                await axios.put(apiUrl + `api/cities/${id}`, city)
            } catch (error) {
                console.log(error)
            }
        }
    },
    deleteCity: (id) => {
        return async (dispatch, getState) => {
            try {
                await axios.delete(apiUrl + `api/cities/${id}`)
            } catch (error) {
                console.log(error)
            }
        }
    },
    filterCities: (input) => { 
        return async (dispatch, getState) => {
            try {
                dispatch({type: 'FILTER_CITIES', payload: input})
            } catch (error) {
                console.log(error)
            }
        }
    }
}   

export default citiesActions