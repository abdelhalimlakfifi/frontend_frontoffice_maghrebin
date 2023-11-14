import React from 'react'
import BtnGlobal from "../../GlobalComponents/BtnGlobal"

const SectionPub = () => {
  return (
   <>
   <div className="flex w-full" style={{ height: "500px" }}>
        <div className="w-1/2 border border-black flex flex-col justify-center items-center">
          <BtnGlobal className="flex" content="Shop now" showIcon={true} />
        </div>
        <div className="w-1/2 border border-black flex flex-col justify-center items-center">
          <BtnGlobal className="flex" content="Shop now" showIcon={true} />
        </div>
      </div>
   </>
  )
}

export default SectionPub;
