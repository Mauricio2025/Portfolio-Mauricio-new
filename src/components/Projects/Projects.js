import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CajuuBeta from "../../Assets/Projects/project-cajuu-beta.png";
import Monibank from "../../Assets/Projects/project-monibank.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import Apeperia from "../../Assets/Projects/project-apeperia.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends 
              build with react.js, Material-UI, and Firebase. Have features which allows user for realtime"
              ghLink="https://github.com/Mauricio2025/PageJohn316Transport"
              demoLink="https://john316transport.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CajuuBeta}
              isBlog={false}
              title="CRM System for Automotive Transport Drivers and Brokers"
              description="An innovative CRM system specifically designed for drivers and brokers in the automotive transport sector. The project has been enhanced with the adoption of modern technologies such as React, Tailwind CSS, and Laravel, providing an improved user experience and advanced functionalities for relationship management and operational efficiency."
              demoLink="https://view.cajuu.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Apeperia}
              isBlog={false}
              title="Apeperia - Responsiveness Company"
              description="Welcome to the official repository of Apeperia, a company dedicated to creating responsive web solutions. This project uses HTML, CSS, and JavaScript to provide an optimized experience across various devices."
              ghLink="https://github.com/Mauricio2025/projeto-apeperia"
              demoLink="https://mauricio2025.github.io/projeto-apeperia/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Monibank}
              isBlog={false}
              title="MiniBank - A Simple Virtual Bank"
              description="MiniBank is a virtual bank project developed using HTML, CSS, and JavaScript. This repository includes the source code for a basic virtual banking system, enabling users to perform operations like deposits, withdrawals, and balance checks."
              ghLink="https://github.com/Mauricio2025/monibank"
              demoLink="https://mauricio2025.github.io/monibank/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
