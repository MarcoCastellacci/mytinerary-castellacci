import axios from "axios";

let apiUrl = "http://localhost:4000/";

const userActions = {
    signUp: (userData) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(apiUrl + `api/user/signup`, userData)
            console.log(res)
            dispatch({type: "MESSAGE",
                    payload:{ view:true,
                            message: res.data.message,
                            success: res.data.success,
                            }
                })
            return res
            } catch (error) {
            console.log(error)
            }
        }
    },
    signIn: (logedUser) => {
        return async (dispatch, getState) => {
                const user = await axios.post(apiUrl + `api/user/signin`, {logedUser})
                console.log(user)
                if (user.data.success) {
                    localStorage.setItem("token", user.data.response.token)
                    dispatch({type: "USER", 
                        payload: user.data.response.userData})
                }
                dispatch({type: "MESSAGE_SIGNIN",
                        payload:{ view:true,
                                message: user.data.message,
                                success: user.data.success,
                            }
                        })
            }
        },
        SignOutUser: (closeuser) => {
            return async (dispatch, getState) => {
                // eslint-disable-next-line
                const user = await axios.post(apiUrl + `api/user/signout`, {closeuser})
                localStorage.removeItem("token")
                dispatch({type: "USER", 
                    payload: null})
                
            }
        },
        verifyToken: (token) => {
            return async (dispatch, getState) => {
                await axios.get(apiUrl + `api/user/signintoken`, {headers: {'Authorization': 'Bearer ' + token}})
                .then(res => {
                    if (res.data.success) {
                        dispatch({type: "USER", 
                            payload: res.data.response.userData})
                        dispatch({type: 'MESSAGE',
                            payload: 
                                {view: true, 
                                message: res.data.message,
                                success: res.data.success,}
                            })
                    }else {localStorage.removeItem("token")}
                }).catch (err => {
                        if(err.response.status === 401){
                            dispatch({type: 'MESSAGE',
                                    payload:{ view:true,
                                            message: 'Please Sign In again',
                                            success: false,
                                            }})
                            localStorage.removeItem("token")
                        }
                    })
            }
        }
}

export default userActions;