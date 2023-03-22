import { LOGIN_USER, REGISTER_USER, SET_USER } from "../actions";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, accessToken: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
