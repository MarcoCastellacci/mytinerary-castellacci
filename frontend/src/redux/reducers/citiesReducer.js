const initialState = {
    cities: [],
    city: [],
    filterCities: []
}

const citiesReducer = (state = initialState, action) => {  
  
    switch (action.type) {
            case 'GET_CITIES':
                return {
                    ...state,
                    cities: action.payload,
                    filterCities: action.payload
                }
            case 'GET_CITY':
                return {        
                    ...state,           
                    city: action.payload
                }
            case 'FILTER_CITIES':
                let filter = state.cities.filter(city => city.name.toLowerCase().includes(action.payload.trim().toLowerCase()))
                return {
                    ...state,
                    filterCities: filter
                }
            default:
                return state
        }
}

export default citiesReducer