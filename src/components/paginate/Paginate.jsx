import React, { useEffect, useState } from "react";
import { getProducts } from "../../reduxstore/Fetchslice";
import { useDispatch, useSelector } from "react-redux";
import "./paginate.css";

const Paginate = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.fetch);
  const { products } = product;
  const pageNumber = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const totalProduct = products.length;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currPage = products.slice(indexOfFirstPost, indexOfLastPost);

  //for loop
  for (let i = 1; i <= Math.ceil(totalProduct / postPerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
dispatch(getProducts(currPage))
    console.log(currPage)  
};

  return (
    <div className="button">
      {pageNumber.map((number) => {
        return (
          <button onClick={() => paginate(number)} key={number}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Paginate;
