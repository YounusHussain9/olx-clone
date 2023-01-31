import React from "react";
import ContentCard from "../../components/cards/Card";
import "./homelist.css";

const Homelist = ({ product }) => {
  return (
    <div className="homeList">
      <ContentCard product={product} />
    </div>
  );
};

export default Homelist;
