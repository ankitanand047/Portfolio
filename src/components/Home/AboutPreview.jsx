import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function AboutPreview() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="section-heading">
              About <span className="purple">Me</span>
            </h1>
            <p className="home-about-body">
              I am a Bachelor of Computer Applications student at
              <b className="purple"> Galgotias University</b>, focused on
              building practical software and machine learning projects.
              <br />
              <br />
              My programming skills include
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, C/C++, JavaScript, HTML, and CSS{" "}
                </b>
              </i>
              with a strong foundation in DSA and OOP.
              <br />
              <br />
              I work with
              <i>
                <b className="purple">
                  {" "}
                  React.js, FastAPI, Flask, and Scikit-learn{" "}
                </b>
              </i>
              and use MySQL and MongoDB for database-driven applications.
              <br />
              <br />
              I focus on problem solving, analytical thinking, debugging, and
              technical documentation.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default AboutPreview;
