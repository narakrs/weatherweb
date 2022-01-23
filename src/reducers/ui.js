import * as Types from './../constants/ui';

const initialState = { showloading: false, showsidebar: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_LOADING:
      return {
        ...state,
        showloading: true,
      };
    case Types.HIDE_LOADING:
      return {
        ...state,
        showloading: false,
      };
    case Types.SHOW_SIDEBAR:
      return {
        ...state,
        showsidebar: true,
      };
    case Types.HIDE_SIDEBAR:
      return {
        ...state,
        showsidebar: false,
      };
    default:
      return state;
  }
};
export default reducer;
