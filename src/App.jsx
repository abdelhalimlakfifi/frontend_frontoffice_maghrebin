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
import WomenCategory from "./Pages/WomenCategory";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


const App = () => {
  return (
    <PrimeReactProvider>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={<LandingPage />} />

        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/my-cart" element={<MyCartPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/product-details" element={<MainProductDetail />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/women-products" element={<WomenCategory />} />
        <Route path="/wish-list" element={<WishListPage />} />
      </Routes>
    </PrimeReactProvider>
  );
};

export default App;