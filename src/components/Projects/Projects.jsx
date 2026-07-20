import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import StarFieldBackground from "../StarFieldBackground";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <StarFieldBackground />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          className="projects-grid"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Fake News Detection"
              description="Machine learning classifier for fake news detection using preprocessing, TF-IDF vectorization, feature engineering, and Scikit-learn models. Achieved 98% test accuracy."
              tags={["Python", "Scikit-learn", "TF-IDF"]}
              ghLink="https://github.com/ankitanand047/FakeNewsDetection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Employee Management System"
              description="Desktop application for employee record management with full CRUD operations, Java Swing UI, structured data handling, and input validation."
              tags={["Java", "Java Swing", "CRUD"]}
              ghLink="https://github.com/ankitanand047/EmployeeManagementSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Spam Email Detector"
              description="Flask web app for real-time spam email classification using text preprocessing, TF-IDF vectorization, and machine learning classification algorithms."
              tags={["Python", "Flask", "Scikit-learn"]}
              ghLink="https://github.com/ankitanand047/Spam-Email-Detector"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
