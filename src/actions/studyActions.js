import * as Types from '../constants/ActionTypes';
import { successNote, errorNote } from '../commons/helpers/notefile';

export const fetchCreateMultiple = value => {
  return {
    type: Types.CREATEMULTIPLE,
    payload: value,
  };s
};
export const fetchRandom = ()=> {
  return {
    type: Types.RANDOMSTUDY,
  };
};
export const fetchOnNextStudy = (value) => {
  return {
    type: Types.ONNEXTSTUDY,
    payload:value
  };
};
export const fetchOnNextStudyYes = (value) => {
  return {
    type: Types.ONNEXTSTUDYYES,
    payload:value
  };
};
export const fetchOnSetNumberStudy = value => {
  return {
    type: Types.ONSETNUMBERSTUDY,
    payload: value,
  };
};
export const getStudy = () => {
  return {
    type: Types.GETSTUDY,
  };
};

export const getAllStudy = data => {
  console.log('this is: ', data);
  return {
    type: Types.GETALLSTUDY,
    payload: data,
  };
};

export const fetchLoginSuccess = data => {
  successNote('Đăng nhập thành công');
  return {
    type: Types.LOGIN_SUCCESS,
    login: data,
  };
};
export const fetchLoginFail = error => {
  errorNote('Đăng nhập thất bại');
  return {
    type: Types.LOGIN_FAIL,
    login: error,
  };
};
// export const fetchLogin = () => {
//   return dispatch => {
//     dispatch(fetchLoginNew());
//     loginApis
//       .getList()
//       .then(resp => {
//         const { data } = resp;
//         dispatch(fetchLoginSuccess(data));
//       })
//       .catch(error => {
//         dispatch(fetchLoginFail(error));
//       });
//   };
// };
