import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchStoresAction } from "../../../redux/actions";

const Navbar = () => {
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const cartItems = [];
  // const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseUser = () => setShowUser(false);
  const handleShowUser = () => setShowUser(true);
  const handleSearchStores = () => {
    cart.map((item) => {
      if (!cartItems.includes(item._id)) cartItems.push(item._id);
    });
    console.log(cartItems);
    dispatch(searchStoresAction(cartItems));
  };

  return (
    <Container fluid className="navbar-container">
      <Row className="d-flex justify-content-between">
        <Col sm={2} className="d-flex justify-content-center mt-3">
          <Link to="/">Logo</Link>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
          <input type={"text"} id="search-bar"></input>
          <Button id="search-button">Search</Button>
        </Col>
        <Col sm={2} className="d-flex justify-content-center mt-3">
          <Button id="user-button" onClick={handleShowUser}>
            User{" "}
          </Button>
        </Col>
      </Row>
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
            <Link to="/Vegetable">Vegetables</Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/Fruit">Fruits</Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/Meat">Meat</Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/Dairy">Dairy</Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/House Goods">House Goods</Link>
          </Col>
        </Col>
        <Col sm={1} className="d-flex justify-content-center mt-4">
          <Button id="cart-button" onClick={handleShowCart}>
            Cart
          </Button>
        </Col>
      </Row>

      <Modal show={showUser} onHide={handleCloseUser}>
        <Modal.Header closeButton>
          <Modal.Title>Login to see your user info</Modal.Title>
        </Modal.Header>
        <Modal.Body>{}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUser}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleCloseUser();
              navigate("/users/login");
            }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>

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
              variant="primary"
              onClick={() => {
                handleSearchStores();
                handleCloseCart();
              }}
            >
              Search Stores
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Navbar;
