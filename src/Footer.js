import React from "react";
import ADS3 from "./logos/ads3.png";
import ADS4 from "./logos/ads4.png";
import ADS5 from "./logos/ads5.png";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerAds1">
          <img src={ADS3} alt="#ADS3" />
        </div>
        <img className="footerAds2" src={ADS4} alt="#ADS4" />
      </div>
      <div className="footerMiddle">
        <div className="footerMiddlePara">
          <p href="#" className="footerMiddleTitle">
            <strong>POPULAR LOCATIONS</strong>
          </p>
          <a href="#">Kolkata</a>
          <a href="#">Mumbai</a>
          <a href="#">Chennai</a>
          <a href="#">Pune</a>
        </div>
        <div className="footerMiddlePara">
          <p href="#" className="footerMiddleTitle">
            <strong>TRENDING LOCATIONS</strong>
          </p>
          <a href="#">Bhubaneshwar</a>
          <a href="#">Hyderabad</a>
          <a href="#">Chandigarh</a>
          <a href="#">Nashik</a>
        </div>
        <div className="footerMiddlePara">
          <p href="#" className="footerMiddleTitle">
            <strong>ABOUT US</strong>
          </p>
          <a href="#">About OLX Group</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
          <a href="#">OLXPeople</a>
          <a href="#">AasaanJobs</a>
        </div>
        <div className="footerMiddlePara">
          <p href="#" className="footerMiddleTitle">
            <strong>OLX</strong>
          </p>
          <a href="#">Help</a>
          <a href="#">Sitemap</a>
          <a href="#">Legal & Privacy information</a>
        </div>
        <div className="footerMiddlePara">
          <p href="#" className="footerMiddleTitle">
            <strong>FOLLOW US</strong>
          </p>
          <div className="footerMiddleParaIcons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <PlayCircleOutlineIcon />
          </div>
          <img src={ADS5} alt="#ADS5" />
        </div>
      </div>
      <div className="footerBottom">
        <a href="#">Other Countries Pakistan - South Africa - Indonesia</a>
        <a>Free Classifieds in India. © 2006-2021 OLX</a>
      </div>
    </div>
  );
}
export default Footer;
