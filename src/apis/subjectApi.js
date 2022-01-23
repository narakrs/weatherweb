import axiosService from '../commons/axiosService';
import { HOST_URL } from '../constants/Url';

export const createMultipleSJ = body => {
  return axiosService.post(`${HOST_URL}/subject/createmultiple`, body);
};

export const getDataSetSlect = body => {
  return axiosService.post(`${HOST_URL}/subject/getselect`, body);
};
export const getSubject = () => {
  return axiosService.get(`${HOST_URL}/subject/get`);
};
