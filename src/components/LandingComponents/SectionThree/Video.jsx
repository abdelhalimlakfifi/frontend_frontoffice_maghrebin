import React from "react";
import TrailerMaghrebin from '../../../assets/TrailerMaghrebin.mp4';
import ReactPlayer from 'react-player';


const Video = () => {
  return (
    <section className="hidden w-full border-t-2 border-b-2 border-black md:flex justify-center items-center h-auto  ">
      <ReactPlayer url={TrailerMaghrebin} playing loop muted width="100%" height="100%" />
    </section>
  );
};

export default Video;