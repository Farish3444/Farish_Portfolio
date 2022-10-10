import React, { useState, useEffect } from "react";
import resumeimg from './RESUME_2022_page-0001.jpg';  
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import '../../App.css'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// import  Resume  from '../../Assets/../Assets/RESUME_2022.pdf';

// const resumeLink = 
// // "https://github.com/Farish3444/Farish_Portfolio/blob/main/src/Assets/RESUME_2022.pdf"
//   // "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf"
//   "https://raw.githubusercontent.com/Farish3444/Farish_Portfolio/blob/main/src/Assets/RESUME_2022.pdf";



function ResumeNew() {
  
  const [width, setWidth] = useState(1200);

  const[numpage,setNumpages] = useState(null);
  const[pageNumber,setPageNumber] = useState(1);

  const onDocumentLoadSuccess =({numpages})=>{
    setNumpages(numpage);
    setPageNumber(1);
  }

  useEffect(() => {
    setWidth(window.innerWidth)
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row className="resume">
          <Document file='/RESUME_2022.pdf' onLoadSuccess={onDocumentLoadSuccess}  className="d-flex justify-content-center" >
            <Page 
            height='600' 
            pageNumber={pageNumber} 
            scale={width > 786 ? 1.7 : 0.6}
             />
          </Document>
        </Row> */}

        <img 
        src={resumeimg}
        alt='resumeImg'
        style={{maxWidth:'50%'}}
        />
<br />  
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <a className="buttonInsta">Download CV heres</a>  
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
