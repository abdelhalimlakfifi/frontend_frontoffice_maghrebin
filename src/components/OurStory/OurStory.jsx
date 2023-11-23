import React from "react";
import OurStoryImg from "../../assets/OurStory.jpg";
import FullLogo from "../../assets/FullLogo.svg";

function OurStory() {
  return (
    <div className="w-full h-[50rem]  md:h-[40rem] lg:h-[50rem]  xl:h-[60rem] flex items-center">
      <div className="w-full h-3/4 border-t-2 border-b-2 border-blackV relative flex justify-center items-center">
       
        <img src={FullLogo} alt="Maghrebin" className="bg-white w-48 px-5 absolute -top-5 left-7  md:left-10 lg:left-40 flex justify-center" />

        <div className=" w-[87%] lg:w-[90%] xl:w-[66%] h-[90%] lg:h-[85%] lx:h-[85%] flex justify-center ">
          <div className=" h-full w-1/2 flex flex-col items-start justify-between">
          
            <div className="w-[80%] lg:py-5 xl:py-11 ">
           
            <h1 className="lg:text-6xl  xl:text-8xl font-medium font-NewYork">Our Story</h1>

            </div>
            
            <div className="text-base font-medium lg:h-[80%] xl:h-[70%] flex flex-col lg:pr-2 lx:py-5 lx:pr-14 text-blackV ">
              <p>
                We are <b>Maghrebin</b>, your ultimate destination for
                exquisite traditional Moroccan clothing. At <b>Maghrebin</b>, we
                take pride in preserving the rich cultural heritage of Morocco
                while supporting local artisans and craftsmen. Our luxurious
                e-commerce platform offers a wide range of meticulously crafted
                garments for women, men, and kids, ensuring that everyone can
                experience the elegance and beauty of traditional Moroccan
                fashion.
              </p>
              <p className="mt-11">
                We understand the value of traditional craftsmanship and the
                importance of sustaining local communities. That's why we
                collaborate with talented artisans, known as <b>Maalam</b> who pour
                their heart and soul into creating these exquisite garments. By
                choosing <b>Maghrebin</b>, you not only embrace the splendor of
                Moroccan fashion but also contribute to the preservation of this
                remarkable heritage.
              </p>
              
            </div>
          </div>
          <div className=" h-full w-1/2">
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
