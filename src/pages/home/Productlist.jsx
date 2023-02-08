import React from "react";
import ContentCard from "../../components/cards/Card";
import "./homelist.css";

const Homelist = ({ product }) => {
  //ProductList is use to create multiple card while array map
  return (
    <div className="homeList">
      <ContentCard product={product} />
    </div>
  );
};

export default Homelist;
