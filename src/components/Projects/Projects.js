import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pic from "../../Assets/Projects/pic.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import QR from "../../Assets/Projects/QR.png";
import cook from "../../Assets/Projects/cook.png";
import tennis from "../../Assets/Projects/tennis.png";
import notes from "../../Assets/Projects/notes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cook}
              isBlog={false}
              title="Cooking catalogue"
              description="Web App built with React, REST API, React-splide, Styled-components and framer
              motion. Its help visitors to find any recipe based on type or
              elements searched for, with ability to see instructions and ingredients."
              ghLink="https://github.com/Khalil-MF/cooks-room.github.io"
              demoLink="http://cook-house.lovestoblog.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Take Notes"
              description="My personal notes page build with React & Redux which gives you ability to take notes, modify exists notes, delete notes and store it on locale storage."
              ghLink="https://github.com/Khalil-MF/redux-crud-app"
              demoLink="http://notebook4u.getenjoyment.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QR}
              isBlog={false}
              title="QR Code Generator"
              description="Web App built with Python and Flask. This app gives client possibility to generate a QR code from a given URL"
              ghLink="https://github.com/Khalil-MF/QR-Generator"
              demoLink="https://khalilmoufa.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="ShowRoom"
              description="Web App built with React, REST API, React-splide and framer
              motion. Its help visitors to find any picture based on type or
              elements searched for, with ability to see who takes the pictures, number of likes & download link."
              ghLink="https://github.com/Khalil-MF/pictures-showroom"
              demoLink="http://show-room.rf.gd/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tennis}
              isBlog={false}
              title="Tennis Counter"
              description="Web app built with React Redux to count Tennis points and also give you possibility to pausea game and set it to zero."
              ghLink="https://github.com/Khalil-MF/tennis-pointe-counter"
              demoLink="https://honorable-loudspeak.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Khalil-MF portfolio"
              description="no description needed you are on it now  😅 ."
              ghLink="https://github.com/Khalil-MF/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
