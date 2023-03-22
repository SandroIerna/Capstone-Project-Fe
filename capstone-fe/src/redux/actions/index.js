export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const GET_USER = "GET_USER";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_ITEMS = "GET_ITEMS";
export const GET_STORES = "GET_STORES";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_COUNT = "UPDATE_COUNT";
export const GET_STORE = "GET_STORE";
export const SET_FILTER = "SET_FILTER";
export const SET_STORES = "SET_STORES";
export const SET_USER = "SET_USER";

export const registerUserAction = (userData) => {
  return async (dispatch) => {
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

export const loginUserAction = (userData) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const URL = process.env.REACT_APP_BE_URL;
    try {
      let response = await fetch(`${URL}/users/login`, options);
      if (response.ok) {
        const loginData = await response.json();
        dispatch({ type: LOGIN_USER, payload: loginData });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setUserAction = (accessToken) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: { authorization: `Bearer ${accessToken}` },
    };
    try {
      const URL = process.env.REACT_APP_BE_URL;
      let response = await fetch(`${URL}/users/me`, options);
      if (response.ok) {
        let userData = await response.json();
        dispatch({ type: SET_USER, payload: userData });
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

export const removeFromCartAction = (item) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };
};

export const updateCountAction = (item) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_COUNT, payload: item });
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

export const searchItemsAction = (itemQuery) => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_URL;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
      body: JSON.stringify(itemQuery),
    };
    try {
      let response = await fetch(`${URL}/items/items`, options);
      if (response.ok) {
        const itemsData = await response.json();
        dispatch({ type: GET_ITEMS, payload: itemsData });
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFilteredItemsAction = (itemType) => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_URL;
    try {
      const options = {
        method: "GET",
        headers: { authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
      };
      let response = await fetch(`${URL}/items/type/${itemType}`, options);
      if (response.ok) {
        const itemsData = await response.json();
        dispatch({ type: GET_ITEMS, payload: itemsData });
      } else console.log("error");
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFilterAction = (filter) => {
  return async (dispatch) => {
    dispatch({ type: SET_FILTER, payload: filter });
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

export const getSingleStoreAction = (storeId) => {
  return async (dispatch) => {
    const URL = process.env.REACT_APP_BE_URL;
    const options = {
      method: "GET",
      headers: { authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    };
    try {
      let response = await fetch(`${URL}/stores/${storeId}`, options);
      if (response.ok) {
        const storeData = await response.json();
        console.log(storeData);
        dispatch({ type: GET_STORE, payload: storeData });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchStoresAction = (cartData) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
      body: JSON.stringify(cartData),
    };
    const URL = process.env.REACT_APP_BE_URL;

    let response = await fetch(`${URL}/stores/cart`, options);
    if (response.ok) {
      const stores = await response.json();
      dispatch({ type: SET_STORES, payload: stores });
    }
  };
};
