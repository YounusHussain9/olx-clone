import React from "react";
import "./paginate.css";

const Paginate = ({ totalProduct, postPerPage, setCurrentPage }) => {
  const pageNumber = [];

  //for loop
  for (let i = 1; i <= Math.ceil(totalProduct / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="button">
      {pageNumber.map((number) => {
        return (
          <button onClick={() => setCurrentPage(number)} key={number}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Paginate;
