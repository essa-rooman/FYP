import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
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
        <h2>TEHZEEB WOODEN CRAFTS</h2>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy;T.W.C </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/tehzeebwoodencraft">
          <InstagramIcon className="instagramSvgIcon" />
        </a>
        <a href="https://www.facebook.com/tehzeebwoodencraft">
          <FacebookIcon className="facebookSvgIcon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
