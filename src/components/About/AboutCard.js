import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Darie-Nistor Nicolae </span>
            from <span className="purple"> Brasov, Romania.</span>
            <br />
            I am currently employed as an iOS developer at Coolblue Netherlands.
            <br />
            Besides coding, I love to do the following activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Guitar Playing (~10 years)
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports (Cycling and Swimming)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Vincit qui patitur"{" "}
          </p>
          <footer className="blockquote-footer">Latin quote</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
