import * as Types from '../constants/ActionTypes';
import { successNote, errorNote } from '../commons/helpers/notefile';

export const fetchCreateMultiple = value => {
  return {
    type: Types.CREATEMULTIPLESJ,
    payload: value,
  };
};
export const fetchRandom = ()=> {
  return {
    type: Types.RANDOMSUBJECT,
  };
};
export const fetchOnNextStudy = (value) => {
  return {
    type: Types.ONNEXTSUBJECT,
    payload:value
  };
};
export const fetchOnNextStudyYes = (value) => {
  return {
    type: Types.ONNEXTSUBJECTYES,
    payload:value
  };
};
export const fetchOnSetNumberStudy = value => {
  return {
    type: Types.ONSETNUMBERSUBJECT,
    payload: value,
  };
};
export const getStudy = () => {
  return {
    type: Types.GETSUBJECT,
  };
};

export const getAllStudy = data => {
  return {
    type: Types.GETALLSUBJECT,
    payload: data.data,
    subject: data.subject.count
  };
};

export const onSetSlect = ( value ) => {
  return {
    type: Types.SETSELECT,
    payload: value
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
