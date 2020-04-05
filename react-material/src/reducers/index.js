import { combineReducers } from 'redux'
import citiesReducer from './citiesReducers'
import forecastReducer from './forecastReducers'
const rootReducer = combineReducers({
  cities: citiesReducer,
  forecast : forecastReducer,
});

export default rootReducer;