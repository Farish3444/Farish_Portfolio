import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textpara from './aboutproject.json'
import leaf from "../../Assets/Projects/leaf.png";
import askanything from "../../Assets/Projects/askanything.png";
import sport from "../../Assets/Projects/SportsArena.JPG";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="MoneyPlus.bg"
              description={textpara.moneyplus}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="BikeBandit.com"
              description={textpara.bikebandit}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="ApplyPan.com"
              description={textpara.applypan}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sport}
              isBlog={false}
              title="PlayHere"
              description={textpara.PlayHere}
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={askanything}
              isBlog={false}
              title="Ask Anything"
              description={textpara.askanything}              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
