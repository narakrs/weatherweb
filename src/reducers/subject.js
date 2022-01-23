import * as Types from './../constants/ActionTypes';

const initialState = {
  data: [],
  stt: 0,
  subject:[],
  select:''
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
    case Types.GETSUBJECT:
      return { ...state };
    case Types.SETSELECT:
      return { ...state, stt:0,select:action.payload};
    case Types.ONNEXTSUBJECTYES:
      return { ...state, stt: state.stt + action.payload };
    case Types.ONSETNUMBERSUBJECT:
      return { ...state, stt: action.payload };
    case Types.CREATEMULTIPLESJ:
      return { ...state };
    case Types.GETALLSUBJECT:
      return { ...state, data: [...action.payload],subject:[...action.subject]};
    case Types.RANDOMSUBJECT:
      let dt= state.data;
      dt = dt.sort(() => Math.random() - 0.5)
      return { data: [...dt], stt: 0 };
    default:
      return state;
  }
};

export default myreducer;
