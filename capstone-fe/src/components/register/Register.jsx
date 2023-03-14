import { Row, Col, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";

const UserRegister = () => {
  const dispatch = useDispatch();
  const userData = { Name: "Sandro" };
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Button onClick={() => navigate("/")}>Back To Home</Button>
      {}
      <Row>
        <Col sm={7} id="loginCard">
          <Row className="d-flex">
            <Col sm={2}></Col>
            <Col>
              <Row className="d-flex  justify-content-around">
                <div>
                  <Link to="/users/login" className="link">
                    <span className="actions">Login</span>
                  </Link>
                </div>
                <div>
                  <span className="actions actions-selected">Sign up</span>
                </div>
              </Row>

              <Row className="input-fields mt-5">
                <Row className="d-flex justify-content-between">
                  <Col sm={6}>
                    <div className="input-field">
                      <input
                        type={"text"}
                        placeholder="First Name"
                        className="input-field"
                      ></input>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="input-field">
                      <input
                        type={"text"}
                        placeholder="Last Name"
                        className="input-field"
                      ></input>
                    </div>
                  </Col>
                </Row>
                <div className="input-field mt-3">
                  <input
                    type={"text"}
                    placeholder="Email"
                    className="input-field"
                  ></input>
                </div>
                <div className="input-field mt-3">
                  <input
                    type={"text"}
                    placeholder="Password"
                    className="input-field"
                  ></input>
                </div>
                <div className="input-field mt-3">
                  <input
                    type={"text"}
                    placeholder="Confirm Password"
                    className="input-field"
                  ></input>
                </div>
              </Row>
              <Row className="d-flex justify-content-between mt-5">
                <div></div>
                <button
                  className="login-button"
                  onClick={() => dispatch(registerUser(userData))}
                >
                  Register
                </button>
              </Row>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Col>
        <Col sm={5}></Col>
      </Row>
    </Container>
  );
};
export default UserRegister;
