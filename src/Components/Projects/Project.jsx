import React from "react";
import { useState } from "react";
import "./Project.css";
import AppImage from "../../Components/images/Screenshot 2023-09-03 114232.png";
import ODKImage from "../../Components/images/Screenshot 2023-09-03 200103.png";
import KekaImage from "../../Components/images/Screenshot 2023-09-03 211015.png";
import WeatherImage from "../../Components/images/Screenshot 2023-09-04 124005.png";
import TodoImage from "../../Components/images/Screenshot 2023-09-04 125730.png";
import AcordionImage from "../../Components/images/Screenshot 2023-09-04 131102.png";
import TabsImage from "../../Components/images/Screenshot 2023-09-04 131811.png";
const Data = [
  {
    img: AppImage,
    sum1: "HTML,CSS,JS,REACT JS,NODE JS,EXPRESS JS,MYSQL",
    sum2: "Appkonik",
    Description:
      "Introducing Appkonik, a cutting-edge software engineering project that seamlessly blends HTML, CSS, JavaScript, React.js, Node.js with Express.js, and MySQL Thanks to its responsive design, Appkonik caters to users on various devices, providing an exceptional experience. Its backend powered by Node.js and Express.js, combined with a MySQL database. The fusion of HTML, CSS, and JavaScript creates interactive highly  frontend React.js, the cornerstone of our project, adds a layer of dynamic functionality, providing users with a seamless and engaging experience. ",
    button: "View Code",
    githubLink: "https://github.com/Gentrit-11/work",
  },
  {
    img: ODKImage,
    sum1: "HTML,CSS,JS,bootstrap,JQuery",
    sum2: "ODK",
    Description:
      "Welcome to our innovative website project, designed and crafted with HTML, CSS, JavaScript, Bootstrap, and jQuery  We specialize in creating tailor-made websites for a diverse range of businesses with a sleek and responsive design, our website serves as a testament to our expertise in delivering custom web solutions  Explore our portfolio, discover the seamless user experience we provide, and learn how we can transform your online presence into a powerful business tool Join us on a journey of digital transformation and let us bring your vision to life on the web",
    button: "View Code",
    githubLink: "https://github.com/Gentrit-11/ODK",
  },
  {
    img: KekaImage,
    sum1: "C#,WPF,SQL,ENTITY{EF}-FRAMEWORK",
    sum2: "ESCHOOL",
    Description:
      "Introducing our School Management System, a comprehensive solution developed with C# and powered by SQL Server.  With our user-friendly interface, you can easily register, edit, and delete student profiles. Students can select their preferred subjects upon registration, and the system efficiently records their payments for the academic year.Our system offers detailed insights into student payments, enabling you to track payments on a daily, monthly, and yearly basis. Additionally, it generates professional invoices in printed form for easy record-keeping.",
    button: "View Code",
  },
];

const Data1 = [
  {
    img: WeatherImage,
    sum1: "HTML,CSS,JS,API,FETCH METHOD",
    sum2: "Weather-Api",
    Description:
      "Introducing our weather application, a beautifully designed project that harnesses the power of HTML, CSS, and JavaScript to bring you up-to-date weather information in a user-friendly interface. With this application, you can access real-time weather data from around the world effortlessly. Our project seamlessly integrates with a weather API, ensuring that you receive accurate and current weather information. The clean and intuitive user interface displays this data in an easy-to-understand format",
   
  },
];
const Data2 = [
  {
    img: TodoImage,
    sum1: "HTML,CSS,JS,REACT JS ",
    sum2: "Todo List",
    Description:
      "Introducing our feature-packed Todo List application, meticulously crafted using HTML, CSS, JavaScript, and the power of React.js. This application is your ultimate tool for organizing tasks, making notes, and boosting productivity. With our user-friendly interface, you can effortlessly save, edit, and delete tasks and notes. Keep your life organized and never forget an important to-do again.",
   
  },
  {
    img: AcordionImage,
    sum1: "HTML,CSS,JS,REACT JS",
    sum2: "Accordion",
    Description:
      "Introducing our interactive Accordion component, crafted with HTML, CSS, JavaScript, and the flexibility of React.js along with the power of React Hooks. This component allows you to effortlessly create collapsible sections, making it ideal for presenting information in a neat and organized manner. Customize your accordion to showcase FAQs, product descriptions, or any content ",
   
  },
  {
    img: TabsImage,
    sum1: "HTML,CSS,JS,REACT JS",
    sum2: "Tabs",
    Description:
      "Introducing our dynamic Tabs component, skillfully developed using HTML, CSS, JavaScript, and the versatility of React.js. This component allows you to organize and present various sets of data with ease. With our Tabs component, you can effortlessly switch between different tabs, each one loaded with distinct data it's showcasing product details, sorting into categories",
   
  },
];

const Project = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="Project">
      <div className="Project-title">
        <h3>Projects</h3>
        <p>
          I have worked on a wide range of projects. From web apps to desktop
          apps. Here are some of my projects.
        </p>

        <div className="Tabs">
          <div className="TabsList">
            <div
              className={`Tab ${count === 0 ? "active" : null}`}
              onClick={() => {
                setCount(0);
              }}
            >
              Web & desktop app
            </div>
            <div
              className={`Tab ${count === 1 ? "active" : null}`}
              onClick={() => {
                setCount(1);
              }}
            >
              Web Api
            </div>
            <div
              className={`Tab ${count === 2 ? "active" : null}`}
              onClick={() => {
                setCount(2);
              }}
            >
              Tasks
            </div>
          </div>

          <div className="tableContent1" hidden={count !== 0}>
            <div className="map">
              {Data.map((mapping) => (
                <div className="Table">
                  <img src={mapping.img} alt="Image" className="app-img" />
                  <h4>{mapping.sum1}</h4>
                  <h5>{mapping.sum2}</h5>
                  <p>{mapping.Description}</p>
                 
                </div>
              ))}
            </div>
          </div>

          <div className="tableContent2" hidden={count !== 1}>
            <div className="map">
              {Data1.map((mapping) => (
                <div className="Table">
                  <img src={mapping.img} alt="Image" className="app-img" />
                  <h4>{mapping.sum1}</h4>
                  <h5>{mapping.sum2}</h5>
                  <p>{mapping.Description}</p>
                 
                </div>
              ))}
            </div>
          </div>
          <div className="tableContent3" hidden={count !== 2}>
            <div className="map">
              {Data2.map((mapping) => (
                <div className="Table">
                  <img src={mapping.img} alt="Image" className="app-img" />
                  <h4>{mapping.sum1}</h4>
                  <h5>{mapping.sum2}</h5>
                  <p>{mapping.Description}</p>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
