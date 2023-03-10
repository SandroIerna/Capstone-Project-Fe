import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import "./navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button id="user-button" onClick={handleShow}>
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
          <Button id="cart-button">Cart</Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              navigate("/users/register");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Navbar;
