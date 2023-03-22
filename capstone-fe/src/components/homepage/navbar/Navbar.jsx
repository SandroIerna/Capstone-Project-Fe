import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./navbar.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchItemsAction,
  searchStoresAction,
  setFilterAction,
  setUserAction,
} from "../../../redux/actions";

const Navbar = ({ homepage }) => {
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const accessToken = useSelector((state) => state.user.accessToken);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const cartItems = [];
  const [filter, setFilter] = useState("");
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
    dispatch(searchStoresAction(cartItems));
  };

  useEffect(() => {
    if (accessToken) dispatch(setUserAction(accessToken.accessToken));
  }, [accessToken]);

  return (
    <Container fluid className="navbar-container">
      <Row className="d-flex justify-content-between">
        <Col sm={2} className="d-flex justify-content-center mt-3">
          <Link to="/">Logo</Link>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
          <input
            type={"text"}
            id="search-bar"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                dispatch(searchItemsAction({ query: filter }));
              }
            }}
            className="pl-4"
          ></input>
          <Button
            id="search-button"
            onClick={() => dispatch(searchItemsAction({ query: filter }))}
          >
            Search
          </Button>
        </Col>
        <Col sm={2} className="d-flex justify-content-center mt-3">
          {user && (
            <Button id="user-button" onClick={handleShowUser}>
              {user.firstName}{" "}
            </Button>
          )}
          {!user && (
            <Button
              id="user-button"
              onClick={() => {
                navigate("/users/login");
              }}
            >
              Login{" "}
            </Button>
          )}
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
            <Link to="/Vegetable" className="link">
              <span>Vegetables</span>
            </Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/Fruit" className="link">
              <span>Fruits</span>
            </Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/Meat" className="link">
              <span>Meat</span>
            </Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/Dairy" className="link">
              <span>Dairy</span>
            </Link>
          </Col>
          <Col
            sm={2}
            className="d-flex justify-content-center align-items-center"
          >
            <Link to="/House Goods" className="link">
              <span>House Goods</span>
            </Link>
          </Col>
        </Col>
        <Col sm={1} className="d-flex justify-content-center mt-4">
          {homepage && (
            <Button
              id="cart-button"
              onClick={handleShowCart}
              className="d-flex align-items-center justify-content-around mr-3"
            >
              <img src="cart.svg" alt="cart-icon" />
              {cart.length > 0 && <span>{cart.length}</span>}
            </Button>
          )}
        </Col>
      </Row>

      <Modal show={showUser} onHide={handleCloseUser}>
        {user && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Login to see your user info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>
                {user.firstName} {user.lastName}
              </h4>
              <span>{user.role}</span>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate(`/profile-page/${user._id}`);
                }}
              >
                ProfilePage
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleCloseUser();
                  navigate("/users/login");
                }}
              >
                Logout
              </Button>
            </Modal.Footer>
          </>
        )}
        {!user && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Login to see your user info</Modal.Title>
            </Modal.Header>
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
          </>
        )}
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
