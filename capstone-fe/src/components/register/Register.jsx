import { Row, Col, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../redux/actions";
import { useState } from "react";

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState("password");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const handleLogin = () => {
    if (password === confirmPassword) dispatch(registerUserAction(userData));
    else {
      console.log("The passwords need to match!");
    }
  };
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
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      ></input>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="input-field">
                      <input
                        type={"text"}
                        placeholder="Last Name"
                        className="input-field"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      ></input>
                    </div>
                  </Col>
                </Row>
                <div className="input-field mt-3">
                  <input
                    type={"text"}
                    placeholder="Email"
                    className="input-field"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-field mt-3">
                  <input
                    type={showPassword}
                    placeholder="Password"
                    className="input-field"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="input-field mt-3">
                  <input
                    type={"password"}
                    placeholder="Confirm Password"
                    className="input-field"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  ></input>
                </div>
              </Row>
              <Row className="d-flex justify-content-between mt-5">
                <Button
                  onClick={() => {
                    handleShowPassword();
                  }}
                >
                  Show Password
                </Button>
                <Button
                  className="login-button"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Register
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
export default UserRegister;
