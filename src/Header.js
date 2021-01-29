import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PersonIcon from "@material-ui/icons/Person";
import ChatLogo from "./logos/chatlogo.jpg";
import MainLogo from "./logos/mainlogo.png";
import SellLogo from "./logos/sell.png";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="headerTop">
        <Link to="/">
          <div className="headerTopLeft">
            <img src={MainLogo} alt="#MainLogo" />
            <FormControl className={classes.formControl}>
              <NativeSelect className={classes.selectEmpty}>
                <option value="" disabled>
                  Location
                </option>
                <option value={10}>West Mambalam</option>
              </NativeSelect>
            </FormControl>
          </div>
        </Link>
        <div className="headerTopCenter">
          <input placeholder="Find Cars,Mobile Phones and more..." />
          <div className="headerTopCenterSearch">
            <SearchIcon />
          </div>
        </div>
        <div className="headerTopRight">
          <FormControl className={classes.formControl}>
            <NativeSelect className={classes.selectEmpty}>
              <option value="" disabled>
                English
              </option>
              <option value={10}>Tamil</option>
            </NativeSelect>
          </FormControl>
          <img
            className="headerTopRightPeople"
            src={ChatLogo}
            alt="#ChatLogo"
          />
          <NotificationsNoneIcon />
          <PersonIcon />
          <Link to="/AddAds">
            <img
              className="headerTopRightSell"
              src={SellLogo}
              alt="#SellLogo"
            />
          </Link>
        </div>
      </div>
      <div className="headerBottom">
        <a href="#">ALL CATEGORIES</a>
        <a href="#">Cars</a>
        <a href="#">Motorcycles</a>
        <a href="#">Mobile Phones</a>
        <a href="#">For Sale: Houses & Apartments</a>
        <a href="#">Scooters</a>
        <a href="#">Commercial & Other Vehicles</a>
        <a href="#">For Rent: Houses & Apartments</a>
      </div>
    </div>
  );
}
export default Header;
