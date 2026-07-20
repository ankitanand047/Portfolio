import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import StarFieldBackground from "../StarFieldBackground";
import AboutPreview from "./AboutPreview";
import RoleTypewriter from "./RoleTypewriter";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".scroll-reveal");

    if (!revealItems.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <Container fluid className="home-section scroll-reveal" id="home">
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
                <strong className="main-name"> Ankit Anand </strong>
              </h1>

              <div className="typewriter-container">
                <RoleTypewriter />
              </div>

              <p className="hero-summary">
                I build practical web and machine learning projects with
                Python, Java, React.js, Flask, FastAPI, and Scikit-learn.
              </p>

              <div className="hero-actions">
                <Button href="#projects" variant="primary">
                  <AiOutlineFundProjectionScreen />{" "}
                  View Projects
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
      <div className="scroll-reveal">
        <AboutPreview />
      </div>

      <div id="about" className="scroll-reveal">
        <About />
      </div>

      <div id="projects" className="scroll-reveal">
        <Projects />
      </div>

      <Container className="home-social-section scroll-reveal">
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
