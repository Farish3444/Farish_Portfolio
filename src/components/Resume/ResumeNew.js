import React, { useState, useEffect } from "react";
import resumeimg from './FarishResume2023_page-0001.jpg';  
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeimg;
    link.download = "FarishResume2023_page-0001.jpg";
    link.click();
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
      
        <img 
        src={resumeimg}
        alt='resumeImg'
        style={{maxWidth:'50%'}}
        />
<br />  
<br />
<br />
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <a className="buttonInsta" onClick={handleDownload}>Download CV heres</a>  
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
