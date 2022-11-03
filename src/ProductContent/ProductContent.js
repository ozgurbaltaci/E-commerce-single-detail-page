import React from "react";
import classes from "./ProductContent.module.css";
import Card from "../UI/Card";
import GalleryInfoCard from "../GalleryInfoCard/GalleryInfoCard";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const ProductContent = () => {
  return (
    <div className={classes.productContentOuterDiv}>
      <Card>
        {/*TODO */}

        <div className={classes.productInnerContainer}>
          <div className={classes.leftDiv}>
            <div className={classes.imgContainer}></div>
            <div className={classes.gallerySlider}></div>
            <div className={classes.galleryInfoCard}>
              <GalleryInfoCard info={"deneme"} color={"red"} />
              <GalleryInfoCard info={"deneme"} color={"black"} />
            </div>
            <div className={classes.photoArrowRight}>
              <SlArrowRight />
            </div>
            <div className={classes.photoArrowLeft}>
              <SlArrowLeft />
            </div>
          </div>
          <div className={classes.rightDiv}></div>
        </div>
      </Card>
    </div>
  );
};

export default ProductContent;
