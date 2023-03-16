import { GET_STORE, GET_STORES } from "../actions";

const initialState = {};

const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORES:
      return { ...state, stores: action.payload };
    case GET_STORE:
      return { ...state, selectedStore: action.payload };
    default:
      return state;
  }
};

export default storesReducer;
