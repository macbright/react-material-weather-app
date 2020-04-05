import * as types from '../constants/actionTypes'
import { APIKEY } from '../constants/apis'
import fetch from 'cross-fetch'
import axios from 'axios'
export function fetchForecast(city) {
    return dispatch => {
      dispatch(fetchForecastBegin());
      // return fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=8&appid=${APIKEY}`)
      //   .then(handleErrors)
      //   .then(res => {
      //     console.log(res.json());
      //     res.json()
      //   }
      //   )
      //   .then(json => {
      //     console.log("fetching apis ", json);
      //     // dispatch(fetchForecastSuccess(json.list));
          
      //     // return json.list;
      //   })
      //   .catch(error => dispatch(fetchForecastError(error)));
      axios
      .get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=8&appid=${APIKEY}`, {
      })
      .then(res => {
        dispatch(fetchForecastSuccess(res.data.list));
        return res.data.list;
      })
      .catch(err => {
        dispatch(fetchForecastError(err.message));
      });
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }


export const fetchForecastBegin = () => ({
  type: types.FETCH_FORECAST_BEGIN
});

export const fetchForecastSuccess = forecast => ({
  type: types.FETCH_FORECAST_SUCCESS,
  payload: { forecast }
});

export const fetchForecastError = error => ({
  type: types.FETCH_FORECAST_ERROR,
  payload: { error }
});