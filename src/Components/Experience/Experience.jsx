import React from 'react'
import "./Experience.css";
export const experiences = [
    {
      id: 0,
      img: "https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png",
      role: "Software Engineering Intern",
      company: "Hemsedal",
      date: "february 2020 - Aug 2020",
      desc: "My tasks encompassed a wide range of responsibilities, including analyzing project requirements, implementing software solutions, and crafting diverse project designs.",
      skills: [
        "HTML,",
        "CSS,",
        "Javascript,",
        "C#,",
        "Asp.Net,",
        "MySql.",
        
      ],
      
    },
    {
      id: 1,
      img: "https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png",
      role: "Front End developer",
      company: "Outkos",
      date: "Jun 2022 - january 2023",
      desc: "At Outkos Company, my role involved a broad range of responsibilities, including project requirement analysis, software solution implementation, and diverse project design tasks.",
      skills: [
        "HTML,",
        "CSS,",
        "Javascript,",
        "Reactjs.",
        
        
      ],
      
    },
    {
      id: 2,
      img: "https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png",
      role: "Web developer",
      company: "Primex",
      date: "January 2023 - March 2023",
      desc: "As a Web Developer at Primex, my role encompassed a diverse set of responsibilities, including for structuring,styling, interactivity of web,building dynamic user interfaces,creatin backend with php/laravel and MySql",
      skills: [
        "HTML,",
        "CSS,",
        "Javascript,",
        "Vue.js,",
        "Php,",
        "Laravel,",
        "MySql.",
        
      ],
      
    },
];

const Experience = () => {
  return (
    <div id='Experience'>
      <div className='exp-header'>
       <div className='exp-title'>
      Experience
      </div>
      <div className='exp-sub-title'>
      My work experience as a software engineer and working on different companies and projects.
      </div>
      </div>
    <div className="experience-container">
    {experiences.map((experience) => (
      <div key={experience.id} className="experience-card">
        <img src={experience.img} alt={experience.company} />
        <div className="experience-details">
          <h3>{experience.role}</h3>
          <p className='company-name'> Company name : {experience.company}</p>
          <p className='date'>Date: {experience.date}</p>
          <p className='company-description'>{experience.desc}</p>
          <ul className='skills-list'>
            Skills:
            {experience.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        
      </div>
    ))}
  </div>
  </div>
);
};

export default Experience;