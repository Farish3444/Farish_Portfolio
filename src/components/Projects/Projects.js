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
import Billing from '../../Assets/Projects/Billingimage.jpg';
import kloudlensImg from '../../Assets/Projects/kl-logov2.png';
import pubskoler from '../../Assets/Projects/PubSkolerCropped-4.png';
import moneyplus from '../../Assets/Projects/moneyplus.png';

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
          imgPath={kloudlensImg}
          link="https://www.kloudlens.com"
          isBlog={false}
          title="KloudLens"
          description={textpara.kloudlens}              
        />
      </Col>

      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pubskoler}
              isBlog={false}
              title="PubSkoler"
              style={{'width':"100%","height":"100%"}}
              link="https://pubskoler.com"
              description={textpara.pubskoler}
            />
          </Col>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moneyplus}
              style={{"height":"40%"}}
              link="https://moneyplus.bg"
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
