import { Row, Col, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchStoresAction, setShowAction } from "../../../redux/actions";
import { useState } from "react";

const Typesbar = ({ itemType, handleShowSideCart, setShow }) => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const accessToken = useSelector((state) => state.user.accessToken);
  const cartItems = [];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);
  const handleSearchStores = () => {
    cart.map((item) => {
      if (!cartItems.includes(item._id)) cartItems.push(item._id);
    });
    navigate("/");
    dispatch(searchStoresAction(cartItems, accessToken.accessToken));
  };

  return (
    <Row className="d-flex justify-content-around">
      <Col sm={1}></Col>
      <Col
        sm={8}
        id="navigation"
        className="mt-4 d-flex justify-content-between"
      >
        <Col
          sm={2}
          className="d-flex justify-content-center align-items-center"
        >
          {itemType === "Vegetable" && (
            <Link to="/Vegetable" className="link selected">
              <span>Vegetables</span>
            </Link>
          )}
          {itemType !== "Vegetable" && (
            <Link to="/Vegetable" className="link">
              <span>Vegetables</span>
            </Link>
          )}
        </Col>
        <Col
          sm={2}
          className="d-flex justify-content-center align-items-center"
        >
          {itemType === "Fruit" && (
            <Link to="/Fruit" className="link selected">
              <span>Fruits</span>
            </Link>
          )}
          {itemType !== "Fruit" && (
            <Link to="/Fruit" className="link">
              <span>Fruits</span>
            </Link>
          )}
        </Col>
        <Col
          sm={2}
          className="d-flex justify-content-center align-items-center item-type"
        >
          {itemType === "Meat" && (
            <Link to="/Meat" className="link selected">
              <span>Meat</span>
            </Link>
          )}
          {itemType !== "Meat" && (
            <Link to="/Meat" className="link">
              <span>Meat</span>
            </Link>
          )}
        </Col>
        <Col
          sm={2}
          className="d-flex justify-content-center align-items-center"
        >
          {itemType === "Dairy" && (
            <Link to="/Dairy" className="link selected">
              <span>Dairy</span>
            </Link>
          )}
          {itemType !== "Dairy" && (
            <Link to="/Dairy" className="link">
              <span>Dairy</span>
            </Link>
          )}
        </Col>
        <Col
          sm={2}
          className="d-flex justify-content-center align-items-center"
        >
          {itemType === "House%20Goods" && (
            <Link to="/House Goods" className="link selected">
              <span>House Goods</span>
            </Link>
          )}
          {itemType !== "House%20Goods" && (
            <Link to="/House Goods" className="link">
              <span>House Goods</span>
            </Link>
          )}
        </Col>
      </Col>
      <Col sm={1} className="d-flex justify-content-center mt-4">
        <Button
          id="cart-button"
          onClick={() => {
            handleShowSideCart();
          }}
          className="d-flex align-items-center justify-content-around mr-3"
        >
          <img src="/cart.svg" alt="cart-icon" />
          {cart.length > 0 && <span>{cart.length}</span>}
        </Button>
      </Col>
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col className="d-flex flex-column">
            {cart.length === 0 && (
              <span>Select something to add in the cart</span>
            )}
            {cart.length > 0 &&
              cart.map((item) => <span key={item._id}>{item.name}</span>)}
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
          {cart.length !== 0 && (
            <Button
              className="cart-modal-button"
              onClick={() => {
                handleSearchStores();
                handleCloseCart();
                dispatch(setShowAction(true));
              }}
            >
              Search Stores
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default Typesbar;
