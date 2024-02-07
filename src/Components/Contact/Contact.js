import React from "react";
import "./Contact.css";
import FacebookLogo from "../../Assets/facebook.png";
import LinkedInLogo from "../../Assets/linkedin.png";
import TelegramLogo from "../../Assets/telegram.png";

export default function Contact() {
  const handleSend = () => {
    alert("Message sent successfully!");
  };
  const SocialCard = () => {
    return (
      <div className="social-links">
        <h1>Find Me On Social Media</h1>
        <div className="facebook-el">
          <img src={FacebookLogo} alt="facebook" />
          <a href="https://www.facebook.com/john.stiphen.50/" target="blank">
            <h2>Find me on Facebook</h2>
          </a>
        </div>
        <div className="facebook-el">
          <img src={LinkedInLogo} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/betsegaw-mesele-70136620a/"
            target="blank"
          >
            <h2>Let us Connect in LinkedIn</h2>
          </a>
        </div>
        <div className="facebook-el">
          <img src={TelegramLogo} alt="telegram" />
          <a href="https://t.me/BM4Uz" target="blank">
            <h2>Message Me on Telegram</h2>
          </a>
        </div>
      </div>
    );
  };

  const AddressCard = () => {
    return (
      <div className="address">
        <h1>My Address...</h1>
        <div className="address-con">
          <div>
            <address>
              <strong>Physical Address: </strong>Addis Ababa, Ethiopia
            </address>
            <address>
              <strong>Email: </strong>betsemese@gmail.com
            </address>
            <address>
              <strong>Phone: </strong>+251969481663
            </address>
          </div>
          <form className="feedback">
            <div className="feedback-name">Feedback...</div>
            <textarea id="feedback" rows="8" cols="40">
              Text me your comments
            </textarea>
            <button onClick={handleSend} id="send" type="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <div className="contact-container" id="cont">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me...</h1>
        <SocialCard />
        <AddressCard />
      </div>
    </div>
  );
}
