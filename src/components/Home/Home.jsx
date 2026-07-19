import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import StarFieldBackground from "../StarFieldBackground";
import AboutPreview from "./AboutPreview";
import RoleTypewriter from "./RoleTypewriter";
import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <StarFieldBackground />
        <Container className="home-content">
          <Row className="home-hero-row">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANKIT ANAND</strong>
              </h1>

              <div className="typewriter-container">
                <RoleTypewriter />
              </div>

              <p className="hero-summary">
                I build practical web and machine learning projects with
                Python, Java, React.js, Flask, FastAPI, and Scikit-learn.
              </p>

              <div className="hero-actions">
                <Button as={Link} to="/project" variant="primary">
                  <AiOutlineFundProjectionScreen />{" "}
                  View Projects
                </Button>
                <Button as={Link} to="/resume" variant="outline-light">
                  <CgFileDocument />{" "}
                  View CV
                </Button>
                <Button
                  href="mailto:ankitanand.works@gmail.com"
                  variant="outline-light"
                >
                  <FaEnvelope />{" "}
                  Email Me
                </Button>
              </div>
            </Col>

            <Col md={5} className="home-main-col">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-main-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutPreview />

      <Container className="home-social-section">
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's Connect</h1>
            <p>
              Feel free to <span className="purple">reach out</span> anytime
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ankitanand047"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankitanand047/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ankitanand.works@gmail.com"
                  className="icon-colour  home-social-icons"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
