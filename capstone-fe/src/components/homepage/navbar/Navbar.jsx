import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  // const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseUser = () => setShowUser(false);
  const handleShowUser = () => setShowUser(true);

  return (
    <Container fluid className="navbar-container">
      <Row className="d-flex justify-content-between">
        <Col sm={2} className="d-flex justify-content-center mt-3">
          Logo
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
            sm={3}
            className="d-flex justify-content-center align-items-center"
          >
            Option1
          </Col>
          <Col
            sm={3}
            className="d-flex justify-content-center align-items-center"
          >
            Option2
          </Col>
          <Col
            sm={3}
            className="d-flex justify-content-center align-items-center"
          >
            Option3
          </Col>
          <Col
            sm={3}
            className="d-flex justify-content-center align-items-center"
          >
            Option4
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
          <Modal.Title>Modal heading</Modal.Title>
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col className="d-flex flex-column">
            {cart &&
              cart.map((item) => <span key={item._id}>{item.name}</span>)}
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleCloseCart();
            }}
          >
            Search Stores
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Navbar;
