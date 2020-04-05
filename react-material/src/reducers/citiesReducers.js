
import { SET_CITY, GET_CITIES , GET_CITY} from '../constants/actionTypes'
const INITIAL_STATE = {
    allCities : [
      { label: 'Belgrade' , value : 'Belgrade'},
      { label: 'Novi Sad' , value : 'Novi Sad'}
    ],
    currentCity : { label : 'Belgrade', value : 'Belgrade'}
};

function citiesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case SET_CITY :
        
        return {
          ...state,
          currentCity : action.payload,        
        }
      case GET_CITY :
        return {
          ...state 
        }
      case GET_CITIES :
        return {
          ...state,
        }

      default : return state;
    }
  }
  
  export default citiesReducer;