import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="main_footer_container">
        <div className="location">
          <div className="heading">
            <h1>Location</h1>
          </div>
          <div className="address">
            <p></p> Lorem ipsum,
            <p></p> dolwre hduwu,
            <p></p> adadgey, 491087, India
          </div>
        </div>
        <hr />
        <br />
        <div className="social_links">
          <div className="heading">
            <h1>Social links</h1>
          </div>
          <div className="links">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <br />
        <hr />
        <div className="copyright">
            <p><i className="fa-regular fa-copyright"></i> Copyright Jhon Doe 2022-23</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
