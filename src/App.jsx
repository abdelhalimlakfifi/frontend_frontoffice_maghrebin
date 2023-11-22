import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import LandingPage from "./Pages/LandingPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CheckoutPage from "./Pages/CheckoutPage";
import MyCartPage from "./Pages/MyCartPage";
import SizeGuidePage from "./Pages/SizeGuidePage";
import MainProductDetail from "./components/ProductDetail/MainProductDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import WishListPage from "./Pages/WishListPage";

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/" element={<LandingPage />} />

        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
        <Route path="/MyCart" element={<MyCartPage />} />
        <Route path="/SizeGuide" element={<SizeGuidePage />} />
        <Route path="/productDetail" element={<MainProductDetail />} />
        <Route path="/userProfile" element={<UserProfile />} />

        <Route path="/wish-list" element={<WishListPage />} />
      </Routes>
    </>
  );
};

export default App;