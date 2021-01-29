import React, { useState, useEffect } from "react";
import "./Body.css";
import ADS1 from "./logos/ads1.png";
import ADS2 from "./logos/ads2.png";
import FreshRecommendation from "./FreshRecommendation";
import Ads from "./ads";
import LastSearch from "./LastSearch";
import db from "./firebase";
function Body() {
  const [ads, setAds] = useState([]);
  const [lastAds, setLastAds] = useState([]);
  useEffect(() => {
    setLastAds(Ads.categories[0].lastSearchAds);
    // setAds(Ads.categories[0].mainAds);
    db.collection("ads").onSnapshot((snapshot) =>
      setAds(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          doc: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="body">
      <div className="bodyImage">
        <img className="bodyImageAds1" src={ADS1} alt="#ADS1" />
        <div className="bodyImageAds2">
          <img src={ADS2} alt="#ADS2" />
        </div>
      </div>
      <div className="bodyTitle">
        <p className="bodyTitle1">Based on your last search</p>
        <a href="#">View more</a>
      </div>
      <div className="bodyLastSearch">
        {lastAds.map((ad) => (
          <LastSearch
            src={ad.src}
            title={ad.title}
            price={ad.price}
            place={ad.place}
            time={ad.time}
          />
        ))}
      </div>
      <p className="bodyTitle1">Fresh recommendations</p>
      <div className="bodyFreshRecommendation">
        {ads?.map((ad) => (
          <FreshRecommendation
            id={ad?.id}
            src={ad?.doc?.src}
            title={ad?.doc?.title}
            price={ad?.doc?.price}
            place={ad?.doc?.place}
            time={ad?.doc?.time}
          />
        ))}
      </div>
    </div>
  );
}
export default Body;
