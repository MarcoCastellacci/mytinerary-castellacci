const initialState = {
    itinerary: [],
    itineraryByCity: [],
    likes: [],
}

const itineraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITINERARYS':
            return {
                ...state,
                itinerary: action.payload
            }
        case 'GET_ITINERARYS_BY_CITY':
            return {
                ...state,
                itineraryByCity: action.payload
            }
        case 'ADD_LIKES':
            return {
                ...state,
                likes: [...state.likes, action.payload]
            }
        default:            
            return state
    }
}
export default itineraryReducer