import axiosService from '../commons/axiosService';
import { HOST_URL } from '../constants/Url';

export const createMultiple = body => {
  return axiosService.post(`${HOST_URL}/study/createmultiple`, body);
};
export const getStudy = () => {
  return axiosService.get(`${HOST_URL}/study/get`);
};
