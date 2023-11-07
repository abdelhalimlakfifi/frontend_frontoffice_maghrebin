import Cards from './Cards';

const MainSection = ({ title, cardData }) => {
  return (
    <section className="w-[94vw] mx-12 py-7">
      <h2 className="m-7 text-2xl">{title}</h2>
      <div className="grid grid-cols-4 gap-y-8">
        {cardData.map((card, index) => (
          <Cards key={index} imageUrl={card.imageUrl} altText={card.altText} price={card.price} buttonText={card.buttonText} />
        ))}
      </div>
    </section>
  );
};

export default MainSection;
