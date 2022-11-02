import React from "react";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import ProductContent from "../ProductContent/ProductContent";
import classes from "./DetailPage.module.css";

const DetailPage = () => {
  const breadCrumbData = [
    { name: "Ana Sayfa", navigation: "/" },
    { name: "Erkek", navigation: "/somePage" },
    { name: "Spor", navigation: "/somePage" },
    { name: "Ayakkabı", navigation: "/somePage" },
  ];
  return (
    <div className={classes.detailPage}>
      <Breadcrumb breadCrumbData={breadCrumbData} />
      <ProductContent />
    </div>
  );
};

export default DetailPage;
