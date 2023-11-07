
import MainSection from "../MainSection";

const Women = () => {
  const cardData = [
    {
      imageUrl: "LandingPage/Jelalebs/jelab.jpg",
      altText: "Alt Text 1",
      price: "$99.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelab.jpg",
      altText: "Alt Text 1",
      price: "$99.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelab.jpg",
      altText: "Alt Text 1",
      price: "$99.XX",
      buttonText: "Button Text 1",
    },
    {
      imageUrl: "LandingPage/Jelalebs/jelab.jpg",
      altText: "Alt Text 1",
      price: "$99.XX",
      buttonText: "Button Text 1",
    },
  ];

  return (
    <MainSection title="NEWLY ARRIVED WOMEN'S ITEMS" cardData={cardData} />
  );
};

export default Women;
