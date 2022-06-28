const initialState = {
    user:[],
    userByEmail: {},
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_USER_BY_EMAIL':
            return {
                ...state,
                userByEmail: action.payload
            }
        default:
            return state
        }
}

export default userReducer