import { Row, Col, Container, Button } from "react-bootstrap";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/actions";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const handleLogin = () => {
    const loginData = { email, password };
    dispatch(loginUserAction(loginData));
  };

  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <Container fluid>
      {}
      <Button onClick={() => navigate("/")}>Back To Home</Button>
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
                    placeholder="Email"
                    className="input-field"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-field mt-5 mb-5">
                  <input
                    type={showPassword}
                    placeholder="Password"
                    className="input-field"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
              </Row>
              <Row className="d-flex justify-content-between mt-5">
                <div>
                  <span>
                    <u>Forgot password?</u>
                  </span>
                </div>
                <Button
                  onClick={() => {
                    handleShowPassword();
                  }}
                >
                  Show psw
                </Button>
                <Button
                  className="login-button"
                  onClick={() => {
                    handleLogin();
                    navigate("/");
                  }}
                >
                  Login
                </Button>
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
