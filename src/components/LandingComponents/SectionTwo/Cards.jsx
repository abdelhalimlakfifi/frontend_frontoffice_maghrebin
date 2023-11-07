

const Cards = ({ imageUrl, altText, price, buttonText }) => {
  return (
  <>
  <div className="flex flex-col mx-3 uppercase">
        <div>
          <img
            className="w-full h-[400px]"
            src={imageUrl}
            alt={altText}
          />
        </div>
        {/* bg-gray-800 bg-opacity-75 p-2 text-white  */}
        <div className="flex justify-between p-2">
          <p>View Details</p>
          <p>Price: {price}</p>
        </div>
        <div>
        {/* {buttonText} */}
          <button className="w-full border border-[#2A2A2A] p-2 mt-7 uppercase">
            View Detail
          </button>
        </div>
      </div>
  </>
  )
}

export default Cards;