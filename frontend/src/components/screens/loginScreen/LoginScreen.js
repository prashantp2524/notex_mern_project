import React, { useEffect, useState } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
// import axios from "axios";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userActions";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ variant }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     // history.push("/mynotes");
  //     navigate("/mynotes");
  //   }
  // }, [navigate]);

  return (
    <MainScreen title={"Login"}>
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" id="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User ? <Link to={"/register"}>Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
