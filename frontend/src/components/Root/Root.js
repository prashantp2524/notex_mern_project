import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import { set } from "mongoose";
// import LandingPage from "../screens/landingPage/LandingPage";

const Root = () => {
  // const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
