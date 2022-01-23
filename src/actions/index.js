import * as Types from './../constants/ActionTypes';
// Login
export const actLogin = login => {
  return {
    type: Types.LOGIN,
    login,
  };
};
export const actLogout = () => {
  return {
    type: Types.LOGUOT,
    login: 3,
  };
};
