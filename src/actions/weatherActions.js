import * as Types from '../constants/WeatherTypes';
import { successNote, errorNote } from '../commons/helpers/notefile';

export const fetchWeather = data => {
  return {
    type: Types.GET_FETCH_WEATHER_BY_CITY,
    payload:data
  };
};
export const getWeatherSuccess = data => {
  return {
    type: Types.GET_WEATHER_BY_CITY_SUCCESS,
    payload: data,
  };
};

export const getWeatherFail = data => {
  return {
    type: Types.GET_WEATHER_BY_CITY_FAIL,
    login: data,
  };
};
