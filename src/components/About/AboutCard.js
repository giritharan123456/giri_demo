import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p className="intro-paragraph">
  Hi Everyone, I am <span className="purple">Giritharan</span> from 
  <span className="purple"> [perambalur], [tamilnadu].</span>
  <br />
  I am passionate about becoming a Full Stack Developer, and I am actively learning and improving my skills in both front-end and back-end technologies.
  <br />
  I am currently focusing on mastering frameworks like React.js for front-end development and Node.js for back-end development.
  <br />
  I am excited to build scalable and dynamic web applications, and I look forward to contributing to real-world projects!
  <br />
  <br />
  Apart from coding, I also enjoy [mention any hobbies or activities you like].
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">giritharan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
