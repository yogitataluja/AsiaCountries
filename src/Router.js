import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail"
import Home from "./Pages/Home"
import Header from "./components/Layout/Header"

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route exact index path="/" element={<Home/>} />
            <Route
              exact
              path="/:country"
              element={<CountryDetail/>}
            />
            {/* <Route  path="*" element={<Errorpage />} /> */}
          </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default Router;
