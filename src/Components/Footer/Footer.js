import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookFooter from "../../Assets/facebook_footer.png";
import LinkedInFooter from "../../Assets/linkedin_footer.png";
import TelegramFooter from "../../Assets/telegram_footer.png";
import MyLogo from "../../Assets/Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-cc">
        <div className="footer-cc-hd">
          <img src={MyLogo} alt="my logo"></img>
          <h2>Betsegaw Mesele</h2>
        </div>
        <p className="copyr">@ 2024 betsegawmesele</p>
        <p className="copyr">All rights Reserved</p>
        <div className="footer-social">
          <img src={FacebookFooter} alt="facebook footer"></img>
          <img src={LinkedInFooter} alt="linkedin footer"></img>
          <img src={TelegramFooter} alt="telegram footer"></img>
        </div>
      </div>
      <div className="quick-links">
        <h1>Quick Links</h1>
        <Link to="https://github.com/bexeGrace" target="blank">
          Github Repositories
        </Link>
      </div>
      <form className="footer-feedback">
        <div className="feedback-name">Feedback...</div>
        <textarea id="feedback" rows="8" cols="40">
          Text me your comments
        </textarea>
        <button id="send" type="submit">
          Send Email
        </button>
      </form>
    </div>
  );
}
