import React from "react";
import Cards from "./Cards";

const MainSection = ({ title, cardData }) => {
  return (
    <section className="w-full px-20 py-7">
      <h2 className="mb-5 text-2xl">{title}</h2>
      <div className="grid grid-cols-4 gap-y-8 gap-x-4">
        {cardData.map((card, index) => (
          <div key={index} className="flex justify-center">
            <Cards
              imageUrl={card.imageUrl}
              altText={card.altText}
              price={card.price}
              // buttonText={card.buttonText}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
