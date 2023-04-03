import {
  Col,
  Container,
  Row,
  Button,
  Modal,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchItemsAction,
  searchStoresAction,
  setFilterAction,
  setShowAction,
  setUserAction,
} from "../../../redux/actions";

const Navbar = ({ homepage }) => {
  const [showUser, setShowUser] = useState(false);
  const accessToken = useSelector((state) => state.user.accessToken);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const cartItems = [];
  const [filter, setFilter] = useState("");
  // const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleCloseUser = () => setShowUser(false);
  const handleShowUser = () => setShowUser(true);

  useEffect(() => {
    if (accessToken) dispatch(setUserAction(accessToken.accessToken));
  }, [accessToken]);

  return (
    <Container fluid className="navbar-container">
      <Row className="d-flex justify-content-between align-items-bottom">
        <Col sm={2} className="d-flex justify-content-center mt-3">
          {location.pathname !== "/" && (
            <Link
              to="/"
              className="d-flex justify-content-center align-items-center logo-link"
            >
              <img src="/Component 3.png" id="logo-img" className="pb-2" />
              <h2 id="logo-title">BasketBuddy</h2>
            </Link>
          )}
          {location.pathname === "/" && (
            <div
              onClick={() => {
                window.location.reload(false);
              }}
              className="d-flex justify-content-center align-items-center logo-link"
            >
              {" "}
              <img src="/Component 3.png" id="logo-img" className="pb-2" />
              <h2 id="logo-title">BasketBuddy</h2>
            </div>
          )}
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
                navigate("/");
                dispatch(searchItemsAction({ query: filter }));
              }
            }}
            className="pl-4"
          ></input>
          <Button
            id="search-button"
            onClick={() => {
              navigate("/");
              dispatch(searchItemsAction({ query: filter }));
            }}
          >
            Search
          </Button>
        </Col>
        <Col sm={2} className="d-flex justify-content-center mt-3">
          {user && (
            <DropdownButton
              // variant="outline-secondary"
              title={user.firstName}
              id="input-group-dropdown-2"
              className="user-button"
              // align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            // <Button id="user-button" onClick={handleShowUser}>
            //   {user.firstName}{" "}
            // </Button>
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

      <Modal show={showUser} onHide={handleCloseUser}>
        {user && (
          <>
            <Modal.Header closeButton>
              {/* <Modal.Title>Login to see your user info</Modal.Title> */}
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
    </Container>
  );
};

export default Navbar;
