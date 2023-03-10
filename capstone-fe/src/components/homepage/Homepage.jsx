import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  getItemsAction,
  getStoresAction,
} from "../../redux/actions";
import Navbar from "./navbar/Navbar";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoresAction());
    dispatch(getItemsAction());
  }, []);
  return (
    <>
      <Navbar></Navbar>
      {/* <Item
        onclick={() => {
          dispatch(addToCartAction(itemData));
        }}
      ></Item> */}
    </>
  );
};
export default Homepage;
