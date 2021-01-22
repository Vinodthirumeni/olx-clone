import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./LastSearch.css";
import { Link } from "react-router-dom";

function LastSearch({ src, title, price, place, time }) {
  return (
    <div className="lastSearch">
      <div className="lastSearchAdsImg">
        <Link to="/AdsPage">
          <img src={src} alt="#bls1" />
        </Link>
        <FavoriteBorderIcon />
      </div>
      <div className="lastSearchAdsFooter">
        <p className="lastSearchAdsFooterPrice">{price}</p>
        <p className="lastSearchAdsFooterDesc">{title}</p>
        <div className="lastSearchAdsFooterPlace">
          <p>{place}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default LastSearch;
