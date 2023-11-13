import React from 'react'
import MainSection from "../MainSection"

const Kids = () => {
  const cardData = [
    {
      imageUrl: "LandingPage/Jelalebs/NewImage2.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      // buttonText: "Button Text 1",
    },
    {
      imageUrl: "LandingPage/Jelalebs/NewImage2.jpg",
      altText: "Alt Text 2",
      price: "$YY.YY",
      // buttonText: "Button Text 2",
    },
  ];

  return (
    <MainSection title="NEWLY ARRIVED KIDS ITEMS" cardData={cardData} />
  );
}

export default Kids;