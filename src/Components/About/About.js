import React, { useState } from "react";
import "./About.css";
import NextLogo from "../../Assets/next.png";
import PrevLogo from "../../Assets/back.png";
import PlaceHolder from "../../Assets/placeholder.png";
import FamBG from "../../Assets/famBG.jpg";
import SchoolBG from "../../Assets/school.jpg";

export default function About() {
  const fatherData = {
    name: "Mesele Worku",
    description:
      "Mesele Worku, my diligent father, has dedicated himself tirelessly to his work and family. With unwavering commitment, he has made numerous sacrifices to ensure my well-being and success, prioritizing my education and personal growth above all else. His guidance and wisdom have been invaluable, shaping my perspective and instilling in me a strong sense of determination. Mesele's selflessness and love serve as a constant source of inspiration, making him not only my father but also my role model.",
  };
  const motherData = {
    name: "Tegegnech Bogale",
    description:
      "Tegegnech Bogale, my loving mother, embodies resilience and compassion in all aspects of her life. With grace and strength, she navigates the challenges of daily life, always putting the well-being of her family first. Tegegnech's nurturing presence creates a warm and supportive environment where love and understanding thrive. Her unwavering support and guidance have been a pillar of strength, shaping my character and nurturing my aspirations. Tegegnech's kindness and generosity touch the hearts of those around her, making her not only a mother but also a source of inspiration and comfort.",
  };
  const parentData = [fatherData, motherData];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % parentData.length);
  };

  const primarySchool = {
    name: "Tolola Primary School",
    location: "Gamo, Ethiopia",
    Woreda: "Chencha",
    description: `Tolola Primary School, located in the Gamo region of Ethiopia, is a vital 
      educational institution serving the local community. With a focus on providing 
      quality education to its students, the school offers a diverse curriculum 
      tailored to meet the needs of students at both secondary and preparatory 
      levels. Situated amidst the scenic beauty of Gamo, the school provides an 
      inspiring learning environment that encourages academic excellence, critical 
      thinking, and personal growth. Chencha Secondary and Preparatory School plays 
      a crucial role in preparing students for higher education and equipping them 
      with the skills and knowledge necessary to succeed in their future endeavors. 
      `,
  };

  const secondarySchool = {
    name: "Chencha secondary and Preparatory School",
    location: "Gamo, Ethiopia",
    Woreda: "Chencha",
    description: `Chencha Secondary and Preparatory School, located in the Gamo region 
      of Ethiopia, is a vital educational institution serving the local community. 
      With a focus on providing quality education to its students, the school 
      offers a diverse curriculum tailored to meet the needs of students at both 
      secondary and preparatory levels. Situated amidst the scenic beauty of Gamo,
    the school provides an inspiring learning environment that encourages academic 
    excellence, critical thinking, and personal growth. Chencha Secondary and 
    Preparatory School plays a crucial role in preparing students for higher 
    education and equipping them with the skills and knowledge necessary to 
    succeed in their future endeavors. `,
  };

  const collage = {
    name: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    Woreda: "Addis Ababa",
    description: `Addis Ababa University (AAU), located in the vibrant capital 
      city of Ethiopia, stands as the flagship institution of higher 
      learning in the country. With a rich history dating back to its 
      establishment in 1950, AAU has evolved into a prestigious academic 
      institution renowned for its commitment to excellence in education, 
      research, and community engagement. Offering a wide range of undergraduate, 
      graduate, and professional programs across various fields of study, 
      the university provides students with a transformative educational 
      experience that prepares them to address the complex challenges 
      facing society. ...`,
  };

  const SchoolData = [primarySchool, secondarySchool, collage];
  const [currCardIndex, setCurrCardIndex] = useState(0);

  const handleNexClick = () => {
    setCurrCardIndex((prevIndex) => (prevIndex + 1) % SchoolData.length);
  };

  const ParentCard = () => {
    return (
      <div className="parent-card-container">
        <button className="prev-btn" onClick={handleNexAbClick}>
          <img className="prev-logo" src={PrevLogo} alt="next" />
        </button>
        <div className="parent-card">
          <button className="prev-btn" onClick={handleNextClick}>
            <img className="prev-logo" src={PrevLogo} alt="next" />
          </button>
          <div>
            <h2 className="parent-name">{parentData[currentCardIndex].name}</h2>
            <img src={PlaceHolder} alt="my father" />
            <div className="parent-description">
              {parentData[currentCardIndex].description}
            </div>
          </div>
          <button className="nex-btn" onClick={handleNextClick}>
            <img className="next-logo" src={NextLogo} alt="next" />
          </button>
        </div>
        <button className="nex-btn" onClick={handleNexAbClick}>
          <img className="next-logo" src={NextLogo} alt="next" />
        </button>
      </div>
    );
  };

  const SchoolCard = () => {
    return (
      <div className="parent-card-container">
        <button className="prev-btn" onClick={handleNexAbClick}>
          <img className="prev-logo" src={PrevLogo} alt="next" />
        </button>
        <div className="parent-card">
          <button className="prev-btn" onClick={handleNexClick}>
            <img className="prev-logo" src={PrevLogo} alt="next" />
          </button>
          <div>
            <h2 className="school-name">{SchoolData[currCardIndex].name}</h2>
            <div className="school-location">
              {SchoolData[currCardIndex].location}
            </div>
            <img src={PlaceHolder} alt="my father" />
            <div className="parent-description">
              {SchoolData[currCardIndex].description}
            </div>
          </div>
          <button className="nex-btn" onClick={handleNexClick}>
            <img className="next-logo" src={NextLogo} alt="next" />
          </button>
        </div>
        <button className="nex-btn" onClick={handleNexAbClick}>
          <img className="next-logo" src={NextLogo} alt="next" />
        </button>
      </div>
    );
  };

  const cardData = [
    { name: "My Family...", card: <ParentCard />, url: FamBG },
    { name: "Schools Where I Learned...", card: <SchoolCard />, url: SchoolBG },
  ];
  const [aboutCardIndex, setAboutCardIndex] = useState(0);

  const handleNexAbClick = () => {
    setAboutCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const AboutCard = () => {
    return (
      <div
        className="about-small-container"
        id="abo"
        style={{ backgroundImage: `url(${cardData[aboutCardIndex].url})` }}
      >
        <div className="about-card">
          <div className="about-name">{cardData[aboutCardIndex].name}</div>
          {cardData[aboutCardIndex].card}
        </div>
      </div>
    );
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me...</h1>
        <AboutCard />
      </div>
    </div>
  );
}
