import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StarFieldBackground from "../StarFieldBackground";
import SkillGrid from "./SkillGrid";
import ProfileSummaryCard from "./ProfileSummaryCard";
import laptopImg from "../../Assets/about.png";
import ToolGrid from "./ToolGrid";

function About() {
  return (
    <>
      {" "}
      <StarFieldBackground />
      <Container fluid className="about-section">
        <Container>
          <h1 className="about-page-title">
            <strong className="purple">About Me</strong>
          </h1>
          <Row className="about-hero-row">
            <Col md={7} className="about-copy-col">
              <ProfileSummaryCard />
            </Col>
            <Col md={5} className="about-img">
              <img
                src={laptopImg}
                alt="Developer workspace illustration"
                className="img-fluid about-illustration"
              />
            </Col>
          </Row>
          <h1 className="project-heading about-subsection-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <SkillGrid />

          <h1 className="project-heading about-subsection-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <ToolGrid />
        </Container>
      </Container>
    </>
  );
}

export default About;
