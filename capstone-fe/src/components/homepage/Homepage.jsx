import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  getItemsAction,
  getStoresAction,
  setShowAction,
} from "../../redux/actions";
import Navbar from "./navbar/Navbar";
import Store from "./store/Store";
import { Container, Row, Button } from "react-bootstrap";
import Item from "./item/Item";
import Footer from "../footer/Footer";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores.stores);
  const items = useSelector((state) => state.items.items);
  const showStores = useSelector((state) => state.stores.show);

  useEffect(() => {
    dispatch(getStoresAction());
    dispatch(getItemsAction());
    dispatch(setShowAction(false));
  }, []);

  useEffect(() => {
    setShow(showStores);
  }, [showStores]);

  return (
    <div className="d-flex flex-column align-content-between">
      <Navbar homepage={true} />
      <Container>
        {show && (
          <Row>
            {stores &&
              stores.map((store) => (
                <Store key={store._id} storeData={store} />
              ))}
          </Row>
        )}

        <Row>
          {items &&
            items.map((item) => <Item key={item._id} itemData={item} />)}
        </Row>

        <Row className="d-flex justify-content-center"></Row>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};
export default Homepage;
