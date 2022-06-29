import axios from "axios";

let apiUrl = "http://localhost:4000/";

const userActions = {
    signUp: (user) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(apiUrl + `api/user/signup`, {user})
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
            try {
                const user = await axios.post(apiUrl + `api/user/signin`, {logedUser})
                dispatch({type: "MESSAGE",
                    payload:{ view:true,
                            message: user.data.message,
                            success: user.data.success,
                            }
                })
            return user
            } catch (error) {
            console.log(error)
            }
        }
    }
}

export default userActions;