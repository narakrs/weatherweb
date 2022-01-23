import * as Types from './../constants/ActionTypes';

const initialState = {
  data: [],
  stt: 0,
};

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
    case Types.GETSTUDY:
      return { ...state, stt: 0 };
    case Types.ONNEXTSTUDYYES:
      return { ...state, stt: state.stt + action.payload };
    case Types.ONSETNUMBERSTUDY:
      return { ...state, stt: action.payload };
    case Types.CREATEMULTIPLE:
      return { ...state, stt: 0 };
    case Types.GETALLSTUDY:
      return { data: [...action.payload], stt: 0 };
    case Types.RANDOMSTUDY:
      let dt= state.data;
      dt = dt.sort(() => Math.random() - 0.5)
      return { data: [...dt], stt: 0 };
    default:
      return state;
  }
};

export default myreducer;
