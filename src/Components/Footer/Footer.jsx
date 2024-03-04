import React from 'react'
import "./Footer.css";

import { BiLogoGmail } from 'react-icons/bi';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




export const Bio = {

    linkedin: "https://www.linkedin.com/in/gentrit-sheremetaj-9250bb22a/",
    gmail: "https://twitter.com/RishavChanda",

  };
const Footer = () => {
  return (
    <div class="FooterContainer">
    <div class="FooterWrapper">
      <div class="Logo">Gentrit Sheremetaj</div>
      <nav class="Nav">
        <a href="#About" class="NavLink">About</a>
        <a href="#Skills" class="NavLink">Skills</a>
        <a href="#Experience" class="NavLink">Experience</a>
        <a href="#Project" class="NavLink">Projects</a>
        <a href="#Education" class="NavLink">Education</a>
      </nav>
      <div class="SocialMediaIcons">
      <a href="https://www.linkedin.com/in/gentrit-sheremetaj-9250bb22a/" className="SocialMediaIcon"><LinkedInIcon /></a>
        <a href="mailto:gentritsheremetaj3@gmail.com" class="SocialMediaIcon"><BiLogoGmail /></a>
      
     
      </div>
      <div class="Copyright">
        &copy; 2023 Gentrit Sheremetaj. All rights reserved.
      </div>
    </div>
  </div>
  
  )
}

export default Footer