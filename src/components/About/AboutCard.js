import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mauricio Souza </span>
            from <span className="purple"> Rio de Janeiro, Brazil.</span>
            <br />
            I am currently employed as a full-stack developer at John 3:16 Transport LLC.
            <br />
            I am currently studying Computer Science at Unopar.
            <br />
            <br />
            Apart from coding, I love playing games and engaging in sports.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying more and more programming.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create things that truly make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mauricio Souza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
