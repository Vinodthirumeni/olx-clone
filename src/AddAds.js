import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./AddAds.css";
import firebase from "firebase";
import { storage } from "./firebase";
import db from "./firebase";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddAds() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("₹ ");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please try upload PNG/JPEG");
    }
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const sendAds = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("ads").add({
              src: url,
              price: price,
              title: title,
              place: place,
            });
            setProgress(0);
            setImage(null);
            setTitle("");
            setPrice("");
            setPlace("");
          });
      }
    );
  };

  return (
    <div className="addAds">
      <div className="addAdsTitle">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </form>
      </div>
      <div className="addAdsPrice">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </form>
      </div>
      <div className="addAdsPlace">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Place"
            onChange={(e) => setPlace(e.target.value)}
            value={place}
          />
        </form>
      </div>

      <label>
        <input type="file" onChange={handleChange} />
        <div className="addAdsAttachment" ><span>+</span></div>
      </label>
      {file && <div>{file.name}</div>}
      <Link to="/">
      <button type="submit" onClick={sendAds}>
        Add Ad
      </button>
      </Link>
    </div>
  );
}

export default AddAds;
