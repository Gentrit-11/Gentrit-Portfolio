import React from "react";

import "./Navbar.css";
import { DiTechcrunch } from "react-icons/di";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


import { HashLink as Link } from 'react-router-hash-link';
import { DiCssdeck } from 'react-icons/di';

const Navbar = () => {
 
  const [isMobile, setIsMobile] = useState(false);
 
  
  return (
    <div className="container-navbar">
    <div className="navbar">
     
      <div className="logo-container">
        {/* <DiTechcrunch className="icon" /> */}
        <DiCssdeck/>
        PORTFOLIO
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="#About" className="nav-link">
          <li>About</li>
        </Link>
       
        <Link to="#Skills" className="nav-link" >
          <li>Skills</li>
        </Link>
       
        <Link to="#Experience" className="nav-link">
          <li> Experience</li>
        </Link>
        <Link to="#Project" className="nav-link">
          <li>Projects</li>
        </Link>
        <Link to="#Education" className="nav-link">
          <li>Education</li>
        </Link>
        <a href="https://github.com/Gentrit-11/" className="nav-link">
        <li className="button-Git">GitHub Profile</li>
      </a>
      </ul>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <AiOutlineClose className="menu-icon-close" />
        ) : (
          <AiOutlineMenu className="menu-icon-open" />
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
