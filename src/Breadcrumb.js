import React from "react";
import classes from "./Breadcrumb.module.css";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = (props) => {
  const n = 4;
  return (
    <div>
      <div className={classes.breadCrumb}>
        {/* Note that items in the breadcrumb will be passed via props as json object and it will be mapped instead of n numbered array */}
        {/* Taken json object should contain navigation path and the name of span*/}
        {/* Also a href part, need to use taken json array via props for different navigations */}

        {[...Array(n)].map((e, i) => (
          <a href="/" className={classes.breadcrumb_item}>
            <span>Anasayfa</span>
            {i !== n - 1 && <MdOutlineKeyboardArrowRight color="#f27a1a" />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
