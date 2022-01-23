import * as Types from './../constants/ActionTypes';

const initialState = {
  tt: 3,
}; // tt:3

const findIndex = (products, id) => {
  let result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

const myreducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, tt: 2 };
    case Types.LOGIN_SUCCESS:
      return { ...state, tt: 1 };
    case Types.LOGIN_FAIL:
      return { ...state, tt: 0 };
    case Types.LOGIN_FILTER:
      return { ...state, txtSearch: '' };
    case Types.LOGIN_FILTER_SUCCESS:
      return { ...state, txtSearch: action.payload };
    default:
      return state;
  }
};

export default myreducer;
