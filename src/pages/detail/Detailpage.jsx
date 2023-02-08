import { useParams } from "react-router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DetailCard from "../../components/cards/Detailcard";
import Productlist from ".././home/Productlist";
import "./detail.css";

const Detailpage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [ads, setAds] = useState([]);

  //get specific user detail
  useEffect(() => {
    const User_Detail = async () => {
      const request = await axios.get(`http://localhost:400/products?id=${id}`);
      const response = await request;
      setProductDetail(response.data);
    };
    User_Detail();
  }, [id]);

  // get add except detail one
  useEffect(() => {
    const Ads = async () => {
      const request = await axios.get(
        `http://localhost:400/products?id_ne=${id}`
      );
      const response = await request;
      setAds(response.data);
    };
    Ads();
  }, [id]);

  return (
    <div>
      {productDetail &&
        productDetail.map((detail) => {
          return <DetailCard detail={detail} key={detail.id} />;
        })}

      <div className="related-ad-card">
        <h5 style={{ padding: "2rem 2rem 0 5rem" }}>
          <strong>Related Ads</strong>
        </h5>

        {ads &&
          ads.map((ad) => {
            //reuse Product list component for making same cards
            return <Productlist product={ad} key={ad.id} />;
          })}
      </div>
    </div>
  );
};

export default Detailpage;
