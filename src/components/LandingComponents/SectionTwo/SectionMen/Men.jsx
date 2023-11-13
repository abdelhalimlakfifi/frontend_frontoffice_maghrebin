import React from 'react'
import MainSection from "../MainSection"

const Men = () => {
  const cardData = [
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
    <MainSection title="NEWLY ARRIVED MEN'S ITEMS" cardData={cardData} />
  );
}

export default Men;