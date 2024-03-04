import React from "react";
import "./Education.css";
import qertificateImage from "../../Components/images/Screenshot 2023-09-05 103619.png";

const Education = () => {
  return (
    <div id="Education">
      <div className="Education-header">
        <div className="edu-title">
          <h1>Education</h1>
        </div>
        <div className="edu-subtitle">
          <p>
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </p>
        </div>
      </div>
      <div className="EducationContainer">
        <h3 className="edu-title">
          B.Sc. Computer Science at AAB College in Pristina
        </h3>
        <div className="eduDate">
        <p>10/2020 – 2023</p>
      </div>
      </div>
      
      <div className="EducationContainer">
        <div className="qertificate-container">
      <img src={qertificateImage} alt={"qertificateImage"} className="q-image"/> 
      <div className="qe-text">
        <h3 className="qe-title">
        The development of an e-commerce web application with .NET CORE 6 and Entity Framework Core.
        </h3>
        
        <a href="./qertificate.pdf" className="qe-button">
         view certificate         
       </a>
       </div>
      </div>
     
      </div>
    </div>
  );
};

export default Education;
