import React from "react";
import classes from "./ProductContent.module.css";
import Card from "../UI/Card";

const ProductContent = () => {
  return (
    <div className={classes.productContentOuterDiv}>
      <Card>
        TODO
        <div className={classes.productInnerContainer}>
          <div className={classes.leftDiv}>
            <div className={classes.imgContainer}></div>
            <div className={classes.gallerySlider}></div>
          </div>
          <div className={classes.rightDiv}></div>
        </div>
      </Card>
    </div>
  );
};

export default ProductContent;
