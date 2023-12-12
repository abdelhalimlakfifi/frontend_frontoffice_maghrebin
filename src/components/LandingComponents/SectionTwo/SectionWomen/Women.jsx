import React from "react";
import WomenCards from "./WomenCards";
import zelija from '../../../../assets/Zelija.svg';

const Women = () => {
  return (
    <div className="flex flex-col font-DIN ">
      <h1 className="uppercase text-3xl font-medium flex justify-center mt-20 font-NewYork text-blackV">New In Women Wear</h1>
      <WomenCards />
      {/* <img
        src={zelija}
        alt="zelija"
        className="xl:right-[45px] lg:h-[8rem] lg:top-[766px] lg:right-[-20px] h-40 absolute top-[848px] right-[165px] z-10  "
      /> */}
    </div>
  );
};

export default Women;

// filter blur-sm blur-sm