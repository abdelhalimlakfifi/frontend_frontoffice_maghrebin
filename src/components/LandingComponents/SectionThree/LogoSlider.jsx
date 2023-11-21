import React from "react";
import Slider from 'react-infinite-logo-slider'

import Zelija from "../../../assets/Zelija.svg"
import Logo from "../../../assets/icons/Logo.svg"

const LogoSlider = () => {
    
    return (
        <div className="my-9 h-22 flex justify-center items-center w-full">
            <Slider
            duration={25}
            toRight={false}
            pauseOnHover={false}
            className="flex justify-center items-center"
            >


            <Slider.Slide className='mx-5 flex items-center justify-center' >
                <img src={Zelija} alt="Maghrebin"  />
            </Slider.Slide>


            <Slider.Slide className='flex items-center justify-center'>
                <img src={Logo}  alt="Maghrebin"  />
            </Slider.Slide>
            <Slider.Slide className='mx-5 flex items-center justify-center' >
                <img src={Zelija} alt="Maghrebin"  />
            </Slider.Slide>


            <Slider.Slide className='flex items-center justify-center'>
                <img src={Logo}  alt="Maghrebin"  />
            </Slider.Slide>
            <Slider.Slide className='mx-5 flex items-center justify-center' >
                <img src={Zelija} alt="Maghrebin"  />
            </Slider.Slide>


            <Slider.Slide className='flex items-center justify-center'>
                <img src={Logo}  alt="Maghrebin"  />
            </Slider.Slide>
          

           
        </Slider>
        </div>
        
        
    )
}              
                     
export default LogoSlider