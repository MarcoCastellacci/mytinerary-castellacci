import axios from "axios";  

// let apiUrl = "https://mytinerary-castellacci.herokuapp.com/"
 let apiUrl = "http://localhost:4000/"

const activitiesActions = {
    createComent: (id, coment) => {
        return async (dispatch, getState) => {
            try {
                await axios.post(apiUrl + `api/activities/${id}/coments`, coment)
            } catch (error) {
                console.log(error)
            }
        }
    },
    getComents: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(apiUrl + `api/activities/${id}/coments`)
                dispatch({type: 'GET_COMENTS', payload: res.data.response.coments
                })
            } catch (error) {
                console.log(error)
            }
        }
    }


}
module.exports = activitiesActions;