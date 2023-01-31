import Homeinput from "../../components/inputs/Home_input";
import CarousalComp from "../../components/carousal/Carousal";
import { FetchProducts } from "../../reduxstore/Fetchslice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./homepage.css";
import Productlist from "./Productlist";
import Paginate from "../../components/paginate/Paginate";

const Homepage = ({}) => {
  const [userSearch, setUserSearch] = useState("");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.fetch);
  const { products } = product;
  const [filterValue, setFilterValue] = useState(products);

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  const onSearchHandle = (e) => {
    setUserSearch(e.target.value);
  };

  const productMaping = products.map((product) => {
    return product;
  });

  useEffect(() => {
    const productFilter = productMaping.filter((product) => {
      return product.addTitle.toLocaleLowerCase().includes(userSearch);
    });
    setFilterValue(productFilter);
  }, [userSearch, products]);

  return (
    <>

      <Homeinput onchange={onSearchHandle} placeholder="Search Product" />
      <CarousalComp />

      <div className="homeProduct">
        {filterValue && filterValue.length > 0
          ? filterValue.map((product) => {
              return <Productlist product={product} key={product.id} />;
            })
          : "Product not Found"}
      </div>

<Paginate />
    </>

);
};

export default Homepage;
