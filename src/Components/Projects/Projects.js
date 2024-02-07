import React, { useState } from "react";
import "../About/About.css";
import "./Projects.css";
import NextLogo from "../../Assets/next.png";
import PrevLogo from "../../Assets/back.png";

import Project1 from "../../Assets/active-states-basket-empty.jpg";
import Project2 from "../../Assets/active-states-lightbox.jpg";
import Project3 from "../../Assets/desktop-design.jpg";
import Project4 from "../../Assets/desktop-preview.jpg";

import SkillTrade1 from "../../Assets/SkillTrade1.png";
import SkillTrade2 from "../../Assets/SkillTrade2.png";
import SkillTrade3 from "../../Assets/SkillTrade3.png";
import SkillTrade4 from "../../Assets/SkillTrade4.png";
import SkillTrade5 from "../../Assets/SkillTrade5.png";

import FairMed1 from "../../Assets/FairMed1.png";
import FairMed2 from "../../Assets/FairMed2.png";
import FairMed3 from "../../Assets/FairMed3.png";
import FairMed4 from "../../Assets/FairMed4.png";
import FairMed5 from "../../Assets/FairMed5.png";
import FairMed6 from "../../Assets/FairMed6.png";
import FairMed7 from "../../Assets/FairMed7.png";
import FairMed8 from "../../Assets/FairMed8.png";

export default function Projects() {
  const project1 = {
    name: "FairMED Doctor Rating and Medical Record Centralization",
    description: `At FairMed, we are passionate about transforming the healthcare experience for patients. We understand the challenges individuals face when it comes to finding reliable healthcare providers and managing their medical records. That's why we have developed a groundbreaking website that combines comprehensive healthcare ratings with a centralized platform for medical record management. FairMed is dedicated to empowering patients with the information they need to make informed decisions about their healthcare providers and to simplify the process of accessing and organizing their medical records.`,
    github: "https://github.com/ChumiGrace/FairMED",
    urls: [
      FairMed1,
      FairMed2,
      FairMed3,
      FairMed4,
      FairMed5,
      FairMed6,
      FairMed7,
      FairMed8,
    ],
  };

  const project2 = {
    name: "Skill Trade Connector",
    description: `Home technicians play a crucial role in ensuring the smooth functioning and maintenance of various household systems and appliances. When an issue arises within the intricate network of a home's infrastructure, it is the home technician who is called upon to diagnose, troubleshoot, and implement effective solutions. Their proficiency not only saves homeowners from the inconvenience of malfunctioning systems but also contributes to the overall safety and efficiency of the living space.`,
    github: "https://github.com/ChumiGrace/Skill-Trade-Connect",
    urls: [SkillTrade1, SkillTrade2, SkillTrade3, SkillTrade4, SkillTrade5],
    preview: "https://chumigrace.github.io/Skill-Trade-Connect/",
  };

  const project3 = {
    name: "E-commerce Prototype",
    description: `Addis Ababa University (AAU), located in the vibrant capital 
    city of Ethiopia, stands as the flagship institution of higher 
    learning in the country. With a rich history dating back to its 
    establishment in 1950, AAU has evolved into a prestigious academic 
    institution renowned for its commitment to excellence in education, 
    research, and community engagement. Offering a wide range of undergraduate, 
    graduate, and professional programs across various fields of study, 
    the university provides students with a transformative educational 
    experience that prepares them to address the complex challenges 
    facing society`,
    github: "https://github.com/ChumiGrace/E-commerce",
    urls: [Project1, Project2, Project3, Project4],
    preview: "",
  };

  const projectData = [project1, project2, project3];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const ProjectCard = () => {
    return (
      <div className="project-card-container">
        <button className="prev-btn" onClick={handleNextClick}>
          <img className="prev-logo" src={PrevLogo} alt="next" />
        </button>
        <div className="project-card">
          <div className="jjs">
            <h2 className="project-name">
              <span className="htm-tag">{`<h1>`}</span>
              {projectData[currentCardIndex].name}
              <span className="htm-tag">{`</h1>`}</span>
            </h2>
            <div className="project-description">
              <span className="htm-tag">{`<p>`}</span>
              <span className="htm-tag">{`<strong>`}</span>
              {"Description:"}
              <span className="htm-tag">{`</strong>`}</span>
              {projectData[currentCardIndex].description}
              <span className="htm-tag">{`</p>`}</span>
            </div>
            <span className="htm-tag pic">{`<picture>`}</span>
            <div className="project-imgs">
              {projectData[currentCardIndex].urls.length > 0 ? (
                projectData[currentCardIndex].urls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`prject ${index + 1}`}
                    className="image-item"
                  />
                ))
              ) : (
                <p>No images to display</p>
              )}
            </div>
            <span className="htm-tag pic">{`</picture>`}</span>
            {projectData[currentCardIndex].preview && (
              <>
                <span className="htm-tag">{`<a>`}</span>
                <a
                  disabled={
                    projectData[currentCardIndex].preview ? false : true
                  }
                  href={projectData[currentCardIndex].preview}
                  target="blank"
                >
                  <button
                    disabled={
                      projectData[currentCardIndex].preview ? false : true
                    }
                    className="project-btn"
                  >
                    Preview...
                  </button>
                </a>
                <span className="htm-tag">{`</a>`}</span>
              </>
            )}
            <span className="htm-tag">{`<a>`}</span>
            <a href={projectData[currentCardIndex].github} target="blank">
              <button className="project-btn">Go To Github Repo</button>
            </a>
            <span className="htm-tag">{`</a>`}</span>
          </div>
        </div>
        <button className="nex-btn" onClick={handleNextClick}>
          <img className="next-logo" src={NextLogo} alt="next" />
        </button>
      </div>
    );
  };

  return (
    <div className="project-container" id="proj">
      <div className="about-content">
        <h1 className="about-title">My Projects...</h1>
        <ProjectCard />
      </div>
    </div>
  );
}
