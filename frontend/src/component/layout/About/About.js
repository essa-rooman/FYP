import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/tehzeebwoodencraft";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="../../images/logo1.jpg"
              alt="Founder"
            />
            <Typography>Tehzeeb Wooden Craft</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span></span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/tehzeebwoodencraft"
              target="blank"
            >
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://www.instagram.com/tehzeebwoodencraft"
              target="blank"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
