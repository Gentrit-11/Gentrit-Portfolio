import React from 'react'
import "./Skills.css"

export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
       
        
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        
       
        
      ],
    },
    {
        title: "Backend",
        skills: [
          {
            name: "PHP",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
          },
         
          {
            name: "Laravel#",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
          },
          
          {
            name: "MySQL",
            image:
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          },
         
         
          {
            name: "C#",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
          },
          {
            name: "Sql",
            image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
          }
          
        ],
      },
      {
        title: "Others",
        skills: [
          {
            name: "Git",
            image:
              "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
          },
          {
            name: "GitHub",
            image:
              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          },

          {
            name: "Netlify",
            image:
              "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
          },
          {
            name: "Vercel",
            image:
              "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
          },
          {
            name: "VS Code",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
          },
      
          {
            name: "Visual studio",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg",
          },
          {
            name: "Figma",
            image:
              "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
          },
        ],
      },
]
const Skills = () => {
    return (
      <div id='Skills'>
      <div className='container-skills-section'>
        <div className='wrapper'>
          <div className='title-skill'>
            Skills
          </div>
          <div className='Descc'>
            Here are some of my skills on which I have been working like software engineer.
          </div>
          <div className='SkillsContainer'>
            {skills.map((skill, index) => (
              <div className='Skill' key={index}>
                <div className='SkillTitle'>
                  {skill.title}
                </div>
                <div className='SkillList'>
                  {skill.skills.map((item, itemIndex) => (
                    <div className='SkillItem' key={itemIndex}>
                      <div className='SkillImage'>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Skills;
  
  
  
  
  
  
  