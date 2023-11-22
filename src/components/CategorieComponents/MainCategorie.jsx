import React from "react";
import CategorieDiv from "./CategorieDiv";
import MainMen from '../../assets/MenMain2.jpg'
import MainKid from '../../assets/Kidmain2.jpg'
import MainWomen from '../../assets/WomenMain.webp'

const MainCategorie = () => {
  return (
    <section className="w-full flex h-[46rem]" >
      <CategorieDiv imgSrc={MainMen} />
      <CategorieDiv imgSrc={MainWomen} />
      <CategorieDiv imgSrc={MainKid} />
    </section>
  );
};

export default MainCategorie;
