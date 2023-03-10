import { GET_STORES } from "../actions";

const initialState = { stores: [] };

const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORES:
      return { ...state, stores: action.payload };
    default:
      return state;
  }
};

export default storesReducer;
