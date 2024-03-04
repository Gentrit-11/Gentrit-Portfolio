import React from "react";
import "./Hero.css";
import HeroImg from "../../images/avatar.jpg";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";

const Hero = () => {
  return (
    <div id="About">
      <div className="Hero">
        <div className="Hero-container">
          <div className="Hero-left-container">
            <div className="title">
              <h1>Hello, I'm Gentrit Sheremetaj, a Front-end Developer</h1>
            </div>
            <div className="sub-title">
              Hello, I'm Gentrit Sheremetaj, a Front-end Developer passionate about innovation. I embrace new challenges, continuously upgrade my skills, and am dedicated to delivering top-notch solutions. With a positive mindset and a commitment to growth, I'm ready to make a significant impact.
            </div>
            <a href="/Gentrit-Sheremetaj-CV.pdf" className="buttonResumeContainer">
              <li className="button-Resume">Check Resume</li>
            </a>
          </div>

          <div className="Hero-right-container">
            <HeroBgAnimation className="animation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
