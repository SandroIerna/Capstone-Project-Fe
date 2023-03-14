import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  getItemsAction,
  getStoresAction,
} from "../../redux/actions";
import Navbar from "./navbar/Navbar";
import Store from "./store/Store";
import { Container, Row, Button } from "react-bootstrap";
import Item from "./item/Item";

const Homepage = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores.stores);
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(getStoresAction());
    dispatch(getItemsAction());
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Row>
          {items &&
            items.map((item) => <Item key={item._id} itemData={item} />)}
        </Row>
        <Row>
          {stores &&
            stores.map((store) => <Store key={store._id} storeData={store} />)}
        </Row>
        <Row className="d-flex justify-content-center"></Row>
      </Container>
    </>
  );
};
export default Homepage;
