import React from "react";
import Navbar from "../Components/Header/Navbar";
import Hero from "../Components/HeroSection/Hero"
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";
import Project from "../Components/Projects/Project";
import Education from "../Components/Education/Education";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";

const Home = () => {
  return (
    <div>
      <Navbar />
     <Hero/>
     <Skills/>
     <Experience/>
     <Project/>
     <Education/>
     <Contact/>
     <Footer/>
<Scroll/>
    </div>
  );
};

export default Home;
