import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khalil Moufadil </span>
            from <span className="purple"> Mohammedia, Morocco.</span>
            <br />I'm a junior front-end React developer and currently
            learning new technologies such as Laravel and Express
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D mechanical conception
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Victory comes from finding opportunities in problems!"{" "}
          </p>
          <footer className="blockquote-footer">Khalil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
