import { UPDATE_COUNT, ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = { cart: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    case UPDATE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
