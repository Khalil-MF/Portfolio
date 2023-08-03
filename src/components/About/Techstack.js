import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiPython,
  DiGit,
  DiPhp
} from "react-icons/di";
import {
  SiRedux,
  SiFlask,
  SiSonarcloud,
  SiTypescript,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";
import {FaLaravel} from "react-icons/fa";
import SiNextDotJs from "./SiNextDotJs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarcloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiNextDotJs/>
      </Col>
    </Row>
  );
}

export default Techstack;
