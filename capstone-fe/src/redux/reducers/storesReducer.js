import { GET_STORE, GET_STORES, SET_SHOW, SET_STORES } from "../actions";

const initialState = {
  show: false,
};

const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORES:
      return { ...state, stores: action.payload };

    case SET_STORES:
      return { ...state, stores: action.payload };

    case GET_STORE:
      return { ...state, selectedStore: action.payload };

    case SET_SHOW:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
};

export default storesReducer;
