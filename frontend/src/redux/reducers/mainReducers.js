import { combineReducers } from "redux";
import citiesReducer from './citiesReducer';
import itineraryReducer from './itineraryReducer';

const mainReducer = combineReducers({citiesReducer,itineraryReducer});

export default mainReducer;