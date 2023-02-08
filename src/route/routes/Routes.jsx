import { Route, Routes } from "react-router";
import React from "react";
import Detailpage from "../../pages/detail/Detailpage";
import Homepage from "../../pages/home/Homepage";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/detail/:id" element={<Detailpage />} />
    </Routes>
  );
};

export default Approutes;
