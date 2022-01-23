import axiosService from '../commons/axiosService';
import { HOST_URL } from '../constants/Url';

const url = 'tables/all';
export const getList = () => {
  return axiosService.get(`${HOST_URL}/${url}`);
};
