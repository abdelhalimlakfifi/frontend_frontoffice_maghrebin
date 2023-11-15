import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./Pages/LandingPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CategoriePage from "./Pages/CategoriePage";
import CheckoutPage from "./Pages/CheckoutPage";
import MyCartPage from "./Pages/MyCartPage";
import SizeGuidePage from "./Pages/SizeGuidePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/Home" element={<LandingPage />} />

        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/categories" element={<CategoriePage />} /> 
        <Route path="/Checkout" element={<CheckoutPage />} />
        <Route path="/MyCart" element={<MyCartPage />} />
        <Route path="/SizeGuide" element={<SizeGuidePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;