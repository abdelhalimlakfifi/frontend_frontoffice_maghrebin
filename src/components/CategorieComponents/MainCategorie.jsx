import React from "react";
import CategorieDiv from "./CategorieDiv";

const MainCategorie = () => {
  return (
    <section className="w-full flex" style={{ height: "700px" }}>
      <CategorieDiv imgSrc="LandingPage/Jelalebs/jelab.jpg" />
      <CategorieDiv imgSrc="your_image_url_2" />
      <CategorieDiv imgSrc="your_image_url_3" />
    </section>
  );
};

export default MainCategorie;
