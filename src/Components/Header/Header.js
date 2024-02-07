import React from "react";
import Logo from "../../Assets/Logo.png";
import "./Header.css";

export default function Header() {
  const handleTabClick = (e) => {
    const namee = e.target.getAttribute("name");
    const section = document.getElementById(`${namee}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="header">
      <nav className="nav-bar">
        <img className="logo-img" src={Logo} alt="my logo" />
        <ul className="nav-list">
          <li name="proj" onClick={handleTabClick} className="nav-links">
            Projects
          </li>
          <li name="abo" onClick={handleTabClick} className="nav-links">
            About
          </li>
          <li name="cont" onClick={handleTabClick} className="nav-links">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
