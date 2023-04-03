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
import Typesbar from "./typesbar/Typesbar";
import CartSideBar from "../cartSidebar/CartSideBar";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores.stores);
  const accessToken = useSelector((state) => state.user.accessToken);
  const items = useSelector((state) => state.items.items);
  const showStores = useSelector((state) => state.stores.show);
  const [showSideCart, setShowSideCart] = useState(
    "mt-4 hide d-flex flex-column align-items-center justify-content-center"
  );

  const handleShowSideCart = () => {
    if (
      showSideCart ===
      "mt-4 hide d-flex flex-column align-items-center justify-content-center"
    )
      setShowSideCart(
        "mt-4 d-flex flex-column align-items-center justify-content-center"
      );
    else {
      setShowSideCart(
        "mt-4 hide d-flex flex-column align-items-center justify-content-center"
      );
    }
  };

  useEffect(() => {
    dispatch(getStoresAction());
    dispatch(getItemsAction());
    // setShow(showStores);
  }, []);

  // useEffect(() => {
  //   setShow(showStores);
  //   console.log(show);
  // }, [showStores]);

  return (
    <div className="d-flex flex-column align-content-between">
      <Navbar homepage={true} />
      <Typesbar handleShowSideCart={handleShowSideCart} />
      <CartSideBar
        showSideCart={showSideCart}
        handleShowSideCart={handleShowSideCart}
        setShow={setShow}
      />
      <Container fluid className="store-container mt-3 pb-5">
        <Container>
          {!show && (
            <h2 className="text-center pt-5">
              Please select some items and search Stores from the cart
            </h2>
          )}
          {show && (
            <Row className="justify-content-center">
              {stores.length === 0 && (
                <div className="d-flex  flex-column align-items-center">
                  <h4 className="mt-5">Oooops. No stores found!</h4>
                  <h4>😞</h4>
                </div>
              )}
              {stores &&
                stores.map((store) => (
                  <Store key={store._id} storeData={store} cardSize={3} />
                ))}
            </Row>
          )}
        </Container>
      </Container>
      <Container>
        <Row>
          {items &&
            items.map((item) => <Item key={item._id} itemData={item} />)}
        </Row>

        <Row className="d-flex justify-content-center"></Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Homepage;
