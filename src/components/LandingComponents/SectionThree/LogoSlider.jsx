import React from 'react';
import Slider from 'react-infinite-logo-slider';

import Zelija from '../../../assets/Zelija-Slider.svg';
import Logo from '../../../assets/icons/LogoSlider-01.svg';

const LogoSlider = () => {
  return (
    <div className="my-9 h-[60px] flex justify-center items-center w-full relative overflow-hidden bg-userProfile">
      <Slider duration={20} toRight={false} pauseOnHover={false} className="flex justify-center items-center">
        <Slider.Slide className="flex items-center justify-center">
          <img src={Zelija} alt="Maghrebin" className="h-10" />
        </Slider.Slide>

        <Slider.Slide className="flex items-center justify-center">
          <img src={Logo} alt="Maghrebin" className="h-10" />
        </Slider.Slide>
        <Slider.Slide className="flex items-center justify-center">
          <img src={Zelija} alt="Maghrebin" className="h-10" />
        </Slider.Slide>

        <Slider.Slide className="flex items-center justify-center">
          <img src={Logo} alt="Maghrebin" className="h-10" />
        </Slider.Slide>
        <Slider.Slide className="flex items-center justify-center">
          <img src={Zelija} alt="Maghrebin" className="h-10" />
        </Slider.Slide>

        <Slider.Slide className="flex items-center justify-center">
          <img src={Logo} alt="Maghrebin" className="h-10" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default LogoSlider;
