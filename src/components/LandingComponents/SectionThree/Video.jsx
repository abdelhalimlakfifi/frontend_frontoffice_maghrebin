import React from 'react';

const Video = () => {
  return (
    <section className="mt-20 w-full border border-black flex justify-center items-center"  style={{ height: "550px" }}>
      <h1 className=''> Your video content</h1>
      <img src="/LandingPage/jlija.svg"  style={{
          width: "200px",
          height: "200px",
          position: "absolute",
          top: "2924px",
          left: "209px",
          transform: "translate(-50%, -50%)",
        }}/>
    </section>
  );
};

export default Video;
