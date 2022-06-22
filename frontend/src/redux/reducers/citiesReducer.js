const initialState = {
    cities: [],
    city: {},
    filterCities: []
}

const citiesReducer = (state = initialState, action) => {  
    console.log(state)
    switch (action.type) {
            case 'GET_CITIES':
                return {
                    ...state,
                    cities: action.payload
                }
            case 'GET_CITY':
                return {        
                    ...state,           
                    city: action.payload
                }
            case 'FILTER_CITIES':
                let filter = state.cities.filter(city => city.name.toLowerCase().includes(action.payload.toLowerCase()))
                return {
                    ...state,
                    filterCities: filter
                }
            default:
                return state
        }
}

export default citiesReducer