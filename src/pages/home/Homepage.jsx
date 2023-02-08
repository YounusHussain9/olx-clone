import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../reduxstore/Fetchslice";
import Homeinput from "../../components/inputs/Home_input";
import CarousalComp from "../../components/carousal/Carousal";
import Productlist from "./Productlist";
import Paginate from "../../components/paginate/Paginate";
import Filter from "../../components/filterComponent/Filter";
import "./homepage.css";

const Homepage = () => {
  //from redux
  const dispatch = useDispatch();
  const product = useSelector((state) => state.fetch);
  const { products } = product;

  //state declaration
  const [userSearch, setUserSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  //paginate variable
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currPage = products.slice(indexOfFirstPost, indexOfLastPost);

  //fetch data when render once
  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  // for seacrh Product
  const onSearchHandle = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <>
      <Homeinput onchange={onSearchHandle} placeholder="Search Product" />
      <div className="anchor-div">
        <h6>
          Mobile Phones Cars Motorcycles Houses TV - Video - Audio Tablets Land
          & Plots
        </h6>
      </div>
      <CarousalComp />

      {/* logic for filter and home product */}
      {userSearch ? (
        <Filter userSearch={userSearch} />
      ) : (
        <div className="homeProduct">
          {currPage.map((product) => {
            return <Productlist product={product} key={product.id} />;
          })}
        </div>
      )}
      {/* pagination Component */}
      <Paginate
        totalProduct={products.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currPage={currPage}
      />
    </>
  );
};

export default Homepage;
