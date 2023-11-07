import React from 'react'
import MainSection from "../MainSection"

const Kids = () => {
  const cardData = [
    {
      imageUrl: "public/LandingPage/Jelalebs/Kids.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "public/LandingPage/Jelalebs/Kids.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "public/LandingPage/Jelalebs/Kids.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "public/LandingPage/Jelalebs/Kids.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
  ];

  return (
    <MainSection title="NEWLY ARRIVED KIDS ITEMS" cardData={cardData} />
  );
}

export default Kids;