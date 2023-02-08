import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Productlist from "../../pages/home/Productlist";
import "./filter.css";

const Filter = ({ userSearch }) => {
  //redux hooks
  const product = useSelector((state) => state.fetch);
  const { products } = product;

  //state
  const [filterValue, setFilterValue] = useState(products);

  //mapping
  const productMaping = products.map((product) => {
    return product;
  });

  //filter while change
  useEffect(() => {
    const productFilter = productMaping.filter((product) => {
      return product.addTitle.toLocaleLowerCase().includes(userSearch);
    });
    setFilterValue(productFilter);
  }, [userSearch, products]);

  return (
    <div className="filterProduct">
      {filterValue.length > 0
        ? filterValue.map((product) => {
            return <Productlist product={product} key={product.id} />;
          })
        : "Product Not Found"}
    </div>
  );
};

export default Filter;
