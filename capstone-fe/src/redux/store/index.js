import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import localStorage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import itemsReducer from "../reducers/itemsReducer";
import cartReducer from "../reducers/cartReducer";
import storesReducer from "../reducers/storesReducer";
import userReducer from "../reducers/userReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_TRANSFORM_KEY,
    }),
  ],
};
const bigReducer = combineReducers({
  user: userReducer,
  stores: storesReducer,
  items: itemsReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);
