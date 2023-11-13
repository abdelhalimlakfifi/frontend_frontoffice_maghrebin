import React from 'react'
import BtnGlobal from "../../GlobalComponents/BtnGlobal"

const Cards = ({ imageUrl, altText, price, buttonText }) => {
  return (
   <>
   <div className="Cards flex flex-col" style={{ width: "320px" }}>
        <div>
          <img
            className="w-full"
            style={{ height: "350px" }}
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
          <BtnGlobal
            className="w-full border border-gray-500 p-2"
            content="View Detail"
          />
        </div>
      </div>
   </>
  )
}

export default Cards;