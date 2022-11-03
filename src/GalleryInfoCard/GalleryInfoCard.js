import React from "react";
import classes from "./GalleryInfoCard.module.css";

const GalleryInfoCard = (props) => {
  return (
    <div className={classes.infoCard} style={{ backgroundColor: props.color }}>
      {props.info}
    </div>
  );
};

export default GalleryInfoCard;
