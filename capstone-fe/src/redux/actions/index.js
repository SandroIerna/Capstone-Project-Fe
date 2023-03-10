export const REGISTER_USER = "REGISTER_USER";
export const GET_USER = "GET_USER";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_ITEMS = "GET_ITEMS";
export const GET_STORES = "GET_STORES";

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

export const addToCartAction = (item) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
};

export const getItemsAction = () => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_URL;
    try {
      const options = {
        method: "GET",
        headers: { authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
      };
      let response = await fetch(`${URL}/items`, options);
      if (response.ok) {
        const itemsData = await response.json();
        dispatch({ type: GET_ITEMS, payload: itemsData });
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getStoresAction = () => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_URL;
    try {
      const options = {
        method: "GET",
        headers: { authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
      };
      let response = await fetch(`${URL}/stores`, options);
      if (response.ok) {
        const storesData = await response.json();
        dispatch({ type: GET_STORES, payload: storesData });
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
};
