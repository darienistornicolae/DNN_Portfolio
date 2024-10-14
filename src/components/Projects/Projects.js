import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Compania"
              description="Compania is an invoicing multi device invoicing app. The user can use the app on iPad or iPhone and the data is automatically synced across all devices."
              // ghLink="https://github.com/darienistornicolae/Compania"
              demoLink="https://apps.apple.com/ro/app/compania-invoicing/id6670502141?l=ro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Motiq"
              description="Motiq is the first complex project that I made and it's available on the App Store. Motiq is a motivational quotes app where you can see daily quotes, add new quotes, but also save and share them."
              ghLink="https://github.com/darienistornicolae/MotiQ"
              demoLink="https://apps.apple.com/ro/app/motiq-ai-quotes-mindfulness/id6447770639?l=ro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="This app is one of the first apps I made when I started learning Swift and Weather API to fetch the weather data. The user inputs the city and the app fetches the weather data and displays it."
              ghLink="https://github.com/darienistornicolae/WeatherApp"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
