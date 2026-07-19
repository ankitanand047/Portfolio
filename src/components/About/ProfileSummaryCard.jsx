import React from "react";
import Card from "react-bootstrap/Card";
import {
  FaBrain,
  FaBullseye,
  FaCloud,
  FaGraduationCap,
  FaLaptopCode,
  FaPuzzlePiece,
  FaRocket,
} from "react-icons/fa";

function ProfileSummaryCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2 className="about-card-title">Profile Snapshot</h2>
          <p className="about-card-intro">
            I am focused on building clean full-stack applications and practical
            machine learning projects while strengthening my fundamentals in
            problem solving, cloud, and system design.
          </p>

          <ul className="about-card-list" aria-label="About Ankit Anand">
            <li>
              <span className="about-card-icon">
                <FaGraduationCap />
              </span>
              <span>
                <strong>Bachelor of Computer Applications (BCA)</strong>
              </span>
            </li>
            <li>
              <span className="about-card-icon">
                <FaLaptopCode />
              </span>
              <span>
                Passionate about{" "}
                <strong className="purple">Full Stack Development</strong>
              </span>
            </li>
            <li>
              <span className="about-card-icon">
                <FaBrain />
              </span>
              <span>
                Exploring{" "}
                <strong className="purple">
                  Artificial Intelligence &amp; Machine Learning
                </strong>
              </span>
            </li>
            <li>
              <span className="about-card-icon">
                <FaCloud />
              </span>
              <span>
                Currently learning{" "}
                <strong className="purple">
                  Cloud Computing &amp; System Design
                </strong>
              </span>
            </li>
            <li>
              <span className="about-card-icon">
                <FaPuzzlePiece />
              </span>
              <span>
                Solved <strong className="purple">100+ DSA Problems</strong>
              </span>
            </li>
            <li>
              <span className="about-card-icon">
                <FaRocket />
              </span>
              <span>
                Building projects with{" "}
                <strong className="purple">
                  React, FastAPI, Flask &amp; Python
                </strong>
              </span>
            </li>
            <li>
              <span className="about-card-icon">
                <FaBullseye />
              </span>
              <span>
                Goal:{" "}
                <strong className="purple">
                  Software Development Engineer (SDE)
                </strong>
              </span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ProfileSummaryCard;
