import React, { useEffect, useState } from "react";
import "./AdsPage.css";
import { useParams } from "react-router-dom";
import db from "./firebase";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Ads6 from "./logos/ads6.png";
import Ads7 from "./logos/ads7.png";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function AdsPage() {
  const { id } = useParams("");
  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("ads")
        .doc(id)
        .onSnapshot((snapshot) => setAds(snapshot.data()));
    }
  }, [id]);

  return (
    <div className="adsPage">
      <div className="adsPageLeft">
        <img src={ads.src} alt="#src" />
        <div className="adsPageLeftMiddle">
          <div className="adsPageLeftMiddleDesc">
            <h3>Description</h3>
            <p>Title : {ads.title}</p>
            <p>Price : {ads.price}</p>
            <p>Place : {ads.place}</p>
            <p>Time : {ads.time}</p>
          </div>
        </div>
      </div>
      <div className="adsPageRight">

        <div className="adsPageRighTop">
          <div className="adsPageRighTopPrice">
            <p>{ads.price}</p>
            <div className="adsPageRighTopIcon">
              <ShareOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
          <div className="adsPageRighTopDesc">
            <p>{ads.title}</p>
            <div className="adsPageRighTopDescPlace">
              <p>{ads.place}</p>
              <p>{ads.time}</p>
            </div>
          </div>
        </div>

        <div className="adsPageRighMiddle">
          <p>Seller description</p>
          <div className="adsPageRighMiddleUser">
            <div className="adsPageRighMiddleUserInfo">
              <img src={Ads6} alt="#" />
              <div className="adsPageRighMiddleUserInfoName">
                <h1>UserName</h1>
                <p>Member since Jan 2020</p>
              </div>
            </div>
            <KeyboardArrowRightIcon />
          </div>
          <div className="adsPageRighMiddleBtn">
            <p>Chat with seller</p>
            <p>Make an offer</p>
          </div>
        </div>

        <div className="adsPageRightBottom">
        <h6>Posted in</h6>
        <p>Chennai, Tamil Nadu</p>
        <img src={Ads7} alt="#map"/>
        </div>  
      </div>
    </div>
  );
}

export default AdsPage;
