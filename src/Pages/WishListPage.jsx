import React from "react";
import Layout from "../components/Layout/Layout";

function WishListPage() {
  return (
    <Layout>
        <div className="bg-yellow-300">
        <i className="pi pi-heart bg-lime-700 text-white text-[35px]" ></i>
        </div>

        <div className="bg-red-400">
            <h1 className="bg-red-950 text-lg text-white">Your Wish List</h1>
        </div>

        <div>
            
        </div>
    </Layout>
  );
}

export default WishListPage;
