import React from "react";
import TrailerMaghrebin from "../../../assets/MoroccoArise.mp4"

const Video = () => {
  return (
    <section className="hidden w-full border-t-2 border-b-2 border-black md:flex justify-center items-center h-auto  ">
      <video controls className="w-full" >
        <source src={TrailerMaghrebin} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>

    </section>
  );
};

export default Video;
