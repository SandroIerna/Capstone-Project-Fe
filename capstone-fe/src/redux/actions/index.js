export const REGISTER_USER = "REGISTER_USER";
export const GET_USER = "GET_USER";

export const registerUser = (userData) => {
  return async (dispatch) => {
    console.log(userData);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const URL = process.env.REACT_APP_BE_URL;
    try {
      let response = await fetch(`${URL}/users/register/`, options);
      if (response.ok) {
        const userData = await response.json();
        dispatch({ type: REGISTER_USER, payload: userData });
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
};
