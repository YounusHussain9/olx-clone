import React from "react";
import olxBrand from "../../assets/brand/olxBrand.png";
import Addproductmodal from "../modals/addproductmodal/Addproductmodal";
import "./home_input.css";

const Homeinput = ({ onchange, placeholder }) => {
  return (
    <div>
      <div className="input-container">
        <img
          src={olxBrand}
          alt=""
          style={{ padding: ".5rem", width: "4rem" }}
        />
        <input
          type="text"
          placeholder={placeholder}
          onChange={onchange}
          className="homeInp"
        />
        <Addproductmodal />
      </div>
    </div>
  );
};

export default Homeinput;
