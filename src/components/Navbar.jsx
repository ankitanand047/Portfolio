import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [resumeAnimating, setResumeAnimating] = useState(false);
  const resumeTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const clearResumeAnimation = () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }

    setResumeAnimating(false);
  };

  const handleSectionClick = (targetId) => {
    updateExpanded(false);
    clearResumeAnimation();

    const scrollToSection = () => {
      const section = document.getElementById(targetId);
      if (!section) {
        return;
      }

      const offset = 78;
      const top =
        targetId === "home"
          ? 0
          : section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToSection, 180);
      return;
    }

    scrollToSection();
  };

  const handleResumeClick = (event) => {
    event.preventDefault();
    updateExpanded(false);

    clearResumeAnimation();
    setResumeAnimating(true);

    resumeTimerRef.current = window.setTimeout(() => {
      setResumeAnimating(false);
      resumeTimerRef.current = null;
      navigate("/resume");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 320);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="brand-text"
          aria-label="Ankit Anand home"
          onClick={(event) => {
            event.preventDefault();
            handleSectionClick("home");
          }}
        >
          <span className="brand-code" aria-hidden="true">
            <span className="brand-symbol">&lt;</span>
            <span className="brand-name">ANKIT</span>
            <span className="brand-symbol">/&gt;</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={(event) => {
                  event.preventDefault();
                  handleSectionClick("home");
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={(event) => {
                  event.preventDefault();
                  handleSectionClick("about");
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  handleSectionClick("projects");
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                className={`resume-nav-link${
                  resumeAnimating ? " is-resume-clicking" : ""
                }`}
                onClick={handleResumeClick}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
