import React from "react";
import "./FreshRecommendation.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import db from "./firebase";
import { Link } from "react-router-dom";

function FreshRecommendation({ id, src, title, price, place, time }) {
  const deleteAds = (e) => {
    e.preventDefault();
    const AdId = e.target.id;
    if (AdId) {
      db.collection("ads").doc(AdId).delete();
    }
  };

  return (
    <div className="freshRecommendation">
      <div className="freshRecommendationAdsImg">
        <Link to={`/AdsPage/${id}`}>
          <img src={src} alt="#bls1" />
        </Link>
        <FavoriteBorderIcon />
      </div>
      <div className="freshRecommendationAdsFooter">
        <p className="freshRecommendationAdsFooterPrice">{price}</p>
        <p className="freshRecommendationAdsFooterDesc">{title}</p>
        <div className="freshRecommendationAdsFooterPlace">
          <p>{place}</p>
          <p>{time}</p>
        </div>
        <DeleteOutlineIcon id={id} onClick={deleteAds} />
      </div>
    </div>
  );
}

export default FreshRecommendation;
