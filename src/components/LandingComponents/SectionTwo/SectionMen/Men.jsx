import React from 'react'
import MainSection from "../MainSection"

const Men = () => {
  const cardData = [
    {
      imageUrl: "public/LandingPage/Jelalebs/MensSelham-.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "public/LandingPage/Jelalebs/MensSelham-.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "public/LandingPage/Jelalebs/MensSelham-.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "public/LandingPage/Jelalebs/MensSelham-.jpg",
      altText: "Alt Text 1",
      price: "$XX.XX",
      buttonText: "Button Text 1",
    },
  ];

  return (
    <MainSection title="NEWLY ARRIVED MEN'S ITEMS" cardData={cardData} />
  );
}

export default Men;