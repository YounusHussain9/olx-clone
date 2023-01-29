import axios from "axios";
import React, { useEffect, useState } from "react";
import Homelist from "./Homelist";
import "./homepage.css";
import Paginate from "../../components/paginate/Paginate";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [curr, setCurr] = useState(1);
  const [ppp, setPpp] = useState(2);

  const ilp = curr * ppp;
  const ifp = ilp - ppp;
  const cp = products.slice(ifp, ilp);

  const Get_Products_Function = async () => {
    try {
      const request = await axios.get(
        `http://localhost:400/products?_sort=featured&_order=desc`
      );
      const response = await request;
      setProducts(response.data);
    } catch (err) {
      console.log("Error is", err);
    }
  };

  useEffect(() => {
    Get_Products_Function();
  }, []);

  return (
    <>
      <div className="homeProduct">
        {products &&
          products.map((product) => {
            return <Homelist product={product} key={product.id} />;
          })}
      </div>
    </>
  );
};

export default Homepage;
