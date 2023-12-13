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
import ProductList from "./Pages/ProductList";
import ProductsByType from "./Pages/ProductsByType";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import ActiveAccountCustomer from "./Pages/ActiveAccountCustomer";


const App = () => {
  return (
    <PrimeReactProvider>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={<LandingPage />} />

        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/product-details" element={<MainProductDetail />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/products-by-type" element={<ProductsByType />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/wish-list" element={<WishListPage />} />
        <Route path="/activateAccount" element={<ActiveAccountCustomer />} />

      </Routes>
    </PrimeReactProvider>
  );
};

export default App;