import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import Catalog from '../pages/Catalog';
// import Detail from '../pages/detail/Detail';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};
export default Routers;
