import React from "react";
import "./PageTitle.css";
const PageTitle = ({category,title}) => {
  return (
    <div className="page_title">
      <div className="line"></div>
      <p>{category}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
