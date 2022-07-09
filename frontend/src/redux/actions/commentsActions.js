import axios from "axios";  

// let apiUrl = "https://mytinerary-castellacci.herokuapp.com/"
let apiUrl = "http://localhost:4000"

const commentsActions = {
    addComment: (comment) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            if (comment.comment !== "") {
                const res = await axios.post(apiUrl + '/api/itinerary/comments', {comment}, {headers: {Authorization: `Bearer  ` + token}
                })
                console.log(res)
                dispatch({
                        type: 'MESSEGE',
                        payload: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }    
                    })
            return res
            } else {
                dispatch({
                    type: 'MESSEGE',
                    payload: {
                        view: true,
                        message: "Please enter a comment",
                        success: false
                    }    
                })
            }
            
        }
    },
    modifyComment: (comment) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.put(apiUrl + '/api/itinerary/comments/' , {comment}, {headers: {Authorization: `Bearer  ` + token}
            })
            dispatch({
                    type: 'MESSEGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            return res
        }
    },
    deleteComment: (id) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.post(apiUrl + `/api/itinerary/comments/${id}` , {} , {headers: {Authorization: `Bearer  ` + token}
            })
            dispatch({
                    type: 'MESSEGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            return res
        }
    }
}
export default commentsActions;