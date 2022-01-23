import axiosService from '../commons/axiosService';
import { HOST_URL } from '../constants/Url';
const key="e6b7a348806f8a2caa16b0900e15571e";

export const getWeather =  body => {
  return axiosService.get(`${HOST_URL}?lat=${body.lat}&lon=${body.lon}&exclude=minutely,hourly&appid=${key}`);
};