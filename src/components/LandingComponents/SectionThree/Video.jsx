import React from "react";
import TrailerMaghrebin from "../../../assets/MoroccoArise.mp4"
import WhiteZlija from "../../../assets/ZlijaGoldShadow.svg"

const Video = () => {
  return (
    <section className="mt-20  w-full border-2 border-black flex justify-center items-center h-auto relative ">
      <video controls className="w-full" >
        <source src={TrailerMaghrebin} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>

    </section>
  );
};

export default Video;
