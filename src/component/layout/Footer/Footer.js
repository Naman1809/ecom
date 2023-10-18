import React from 'react'
import playStore from "../../../Images/playstore.png";
import appStore from "../../../Images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
    <div className="leftFooter">
      <h4>DOWNLOAD OUR APP</h4>
      <p>Download App for Android and IOS mobile phone</p>
      <img src={playStore} alt="playstore" />
      <img src={appStore} alt="Appstore" />
    </div>

    <div className="midFooter">
      <h1>ECOMMERCE.</h1>
      <p>High Quality is our first priority</p>

      <p>Copyrights 2023 &copy; Naman</p>
    </div>

    <div className="rightFooter">
      <h4>Follow Us</h4>
      <a href="http://instagram.com/coolest_naman">Instagram</a>
      <a href="https://www.linkedin.com/in/naman-kukreja-215a9a1b2/">LinkedIn</a>
      
    </div>

    </footer>
  )
}

export default Footer
