import { Row, Col, Container } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <Container fluid>
      {}
      <Row>
        <Col sm={7} id="loginCard">
          <Row className="d-flex">
            <Col sm={2}></Col>
            <Col>
              <Row className="d-flex  justify-content-around">
                <div>
                  <span className="actions actions-selected">Login</span>
                </div>
                <div>
                  <Link to="/users/register" className="link">
                    <span className="actions">Sign up</span>{" "}
                  </Link>
                </div>
              </Row>

              <Row className="input-fields mt-5">
                <div className="input-field mt-5">
                  <input
                    type={"text"}
                    placeholder="Username"
                    className="input-field"
                  ></input>
                </div>
                <div className="input-field mt-5 mb-5">
                  <input
                    type={"text"}
                    placeholder="Password"
                    className="input-field"
                  ></input>
                </div>
              </Row>
              <Row className="d-flex justify-content-between mt-5">
                <div>
                  <span>
                    <u>Forgot password?</u>
                  </span>
                </div>
                <button className="login-button">Login</button>
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
export default UserLogin;
