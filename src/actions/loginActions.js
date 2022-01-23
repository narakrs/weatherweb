import * as Types from '../constants/ActionTypes';
import { successNote, errorNote } from '../commons/helpers/notefile';

export const fetchLoginNew = () => {
  return {
    type: Types.LOGIN,
  };
};
export const filterLogin = value => {
  return {
    type: Types.LOGIN_FILTER,
    payload: value,
  };
};

export const filterSuccess = data => {
  console.log('this is: ', data);
  return {
    type: Types.LOGIN_FILTER_SUCCESS,
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
