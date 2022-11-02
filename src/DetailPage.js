import React from "react";
import Breadcrumb from "./Breadcrumb";

const DetailPage = () => {
  const breadCrumbData = [
    { name: "Ana Sayfa", navigation: "/" },
    { name: "Erkek", navigation: "/somePage" },
    { name: "Spor", navigation: "/somePage" },
    { name: "Ayakkabı", navigation: "/somePage" },
  ];
  return (
    <div>
      <Breadcrumb breadCrumbData={breadCrumbData} />
    </div>
  );
};

export default DetailPage;
