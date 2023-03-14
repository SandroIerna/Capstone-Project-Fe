import { LOGIN_USER, REGISTER_USER } from "../actions";

const initialState = { accessToken: "" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, accessToken: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
