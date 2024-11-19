import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/chatify.png";
import portfolio from "../../Assets/Projects/blog.png";

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
              imgPath={calculator}
              isBlog={false}
              title="calculator"
              description="react using to make a calculator "
              ghLink="https://github.com/giritharan123456/demo"
              demoLink="http://192.168.40.65:3001/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfolio"
              description="just to make a portfolio"
              ghLink="https://github.com/giritharan123456/giri_portfolio"
              demoLink="http://localhost:3000/project"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
