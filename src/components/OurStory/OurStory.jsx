import React from "react";
import OurStoryImg from "../../assets/OurStory.jpg";
import FullLogo from "../../assets/FullLogo.svg";

function OurStory() {
  return (
    <div className="w-full h-[70rem]  md:h-[64rem] lg:h-[50rem]  xl:h-[54rem] flex items-center ">
      <div className="w-full h-3/4 border-t-2 border-b-2 border-blackV relative flex justify-center items-center">
      
        <img src={FullLogo} alt="Maghrebin" className="bg-white w-48 px-5 absolute -top-5   md:left-72 lg:left-14 xl:left-40 flex justify-center" />

        <div className="w-[95%] md:w-[87%] lg:w-[90%] xl:w-[66%]  h-[85%] lg:h-[79%] lx:h-[85%] flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-10  ">
          <div className=" h-full w-full lg:w-1/2 flex flex-col items-center lg:items-start  lg:justify-between">
          
            <div className="w-full lg:w-[80%] p-3 lg:p-0 flex justify-center lg:justify-start">
          
            <h1 className="text-3xl md:text-4xl lg:text-5xl  xl:text-7xl font-medium font-NewYork ">Our Story</h1>

            </div>
            
            <div className="text-base font-medium font-DIN   md:h-[80%] flex flex-col lg:pr-2 lx:py-5 lx:pr-14 text-blackV ">
              <p className=" text-justify">
                We are <b>Maghrebin</b>, your ultimate destination for
                exquisite traditional Moroccan clothing. At <b>Maghrebin</b>, we
                take pride in preserving the rich cultural heritage of Morocco
                while supporting local artisans and craftsmen. Our luxurious
                e-commerce platform offers a wide range of meticulously crafted
                garments for women, men, and kids, ensuring that everyone can
                experience the elegance and beauty of traditional Moroccan
                fashion.
              </p>
              {/* <p className="mt-4 md:mt-5 lg:mt-9 xl:mt-9 text-justify">
                We understand the value of traditional craftsmanship and the
                importance of sustaining local communities. That's why we
                collaborate with talented artisans, known as <b>Maalam</b> who pour
                their heart and soul into creating these exquisite garments. By
                choosing <b>Maghrebin</b>, you not only embrace the splendor of
                Moroccan fashion but also contribute to the preservation of this
                remarkable heritage.
              </p> */}
              
            </div>
          </div>
          <div className="h-[45%] md:h-[55%] lg:h-[32rem] w-[100%]  lg:w-1/2 ">
            <img
              src={OurStoryImg}
              alt="maghrebin"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
