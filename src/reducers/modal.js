import * as Types from './../constants/ModalTypes';

const initialState = {
  openModal: false,
};
const myreducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, openModal: true };
    case Types.CLOSE_MODAL:
      return { ...state, openModal: false };
    default:
      return state;
  }
};

export default myreducer;
