import React from "react";
import MainSection from "../MainSection";

const Women = () => {
  const cardData = [
    {
      imageUrl: "LandingPage/Jelalebs/jelab.jpg",
      altText: "Alt Text 1",
      price: "$99.XX",
      // buttonText: "Button Text 1",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelaba.webp",
      altText: "Alt Text 2",
      price: "$88.YY",
      // buttonText: "Button Text 2",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelaba.jpg",
      altText: "Alt Text 1",
      price: "$77.XX",
      // buttonText: "Button Text 1",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelabaa.webp",
      altText: "Alt Text 2",
      price: "$YY.YY",
      // buttonText: "Button Text 2",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelaba.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      // buttonText: "Button Text 1",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelabaa.webp",
      altText: "Alt Text 2",
      price: "$YY.YY",
      // buttonText: "Button Text 2",
    },
  ];

  return (
    <MainSection title="NEWLY ARRIVED WOMEN'S ITEMS" cardData={cardData} />
  );
};

export default Women;
