
import * as types from '../constants/actionTypes'

export const cities = content => ({
  type: types.SET_CITY,
  payload: {
    content
  }
})
