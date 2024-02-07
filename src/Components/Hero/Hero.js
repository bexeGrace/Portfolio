import React, { useEffect, useState } from "react";
import "./Hero.css";
import HeroImage from "../../Assets/portPP.JPG";

export default function Hero() {
  const TypingEffect = () => {
    const [name, setName] = useState("");
    const nameText = "Beetsegaw Mesele";
    const typingSpeed = 250; // Adjust typing speed (milliseconds)

    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < nameText.length) {
          setName((prevName) => prevName + nameText.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once on component mount

    return (
      <div className="desc">
        <p>
          Hey there, My name is <span id="name">{name}</span>
          <span id="title">I am a Web developer!</span>
        </p>
      </div>
    );
  };
  return (
    <div className="hero-container">
      <div className="hero">
        <img className="hero-image" src={HeroImage} alt="my hero pp" />
        <TypingEffect />
      </div>
    </div>
  );
}
