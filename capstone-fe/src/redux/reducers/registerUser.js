import { REGISTER_USER } from "../actions";

const initialState = { registrationUser: undefined };

const registerUser = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, registrationUser: action.payload };
    default:
      return state;
  }
};
export default registerUser;
