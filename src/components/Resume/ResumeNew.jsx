import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume/Ankit_CV_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const resumePreview = `${pdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=100`;

  return (
    <Container fluid className="resume-section">
      <Particle />
      <div className="resume-download-wrap">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          className="resume-download-btn"
        >
          <AiOutlineDownload />
          Download CV
        </Button>
      </div>

      <div className="resume-pdf-wrap">
        <iframe
          src={resumePreview}
          title="Ankit Anand CV"
          className="resume-pdf-frame"
        />
      </div>
    </Container>
  );
}

export default ResumeNew;
