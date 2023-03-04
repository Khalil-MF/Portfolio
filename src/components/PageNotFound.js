import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "./Particle";
import TypeError from "./Home/TypeError";
import errorLogo from "../Assets/error404.svg";

function PageNotFound() {
  return (
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Error 404!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                ☝️
              </span>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <TypeError />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={errorLogo}
              alt="error pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PageNotFound;
