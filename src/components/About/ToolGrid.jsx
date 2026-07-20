import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
} from "react-icons/si";
import Git from "../../Assets/TechIcons/Git.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function ToolGrid() {
  return (
    <Row
      className="tech-grid tool-grid"
      style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiMicrosoftexcel fontSize={"24px"} />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiMicrosoftword fontSize={"24px"} />
        <div className="tech-icons-text">Word</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiMicrosoftpowerpoint fontSize={"24px"} />
        <div className="tech-icons-text">PowerPoint</div>
      </Col>
    </Row>
  );
}

export default ToolGrid;
