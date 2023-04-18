import React from "react";
import { Container, Row } from "react-bootstrap";
// import { Outlet } from "react-router-dom";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr style={{ background: "white" }} />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
