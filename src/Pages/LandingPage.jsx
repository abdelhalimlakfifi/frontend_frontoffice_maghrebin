import React from "react";
import SectionPub from "../components/LandingComponents/SectionOne/SectionPub";

import Women from "../components/LandingComponents/SectionTwo/SectionWomen/Women"
import Men from "../components/LandingComponents/SectionTwo/SectionMen/Men"
import Kids from "../components/LandingComponents/SectionTwo/SectionKids/Kids"

import Video from "../components/LandingComponents/SectionThree/Video"
import Layout from "../components/Layout/Layout";
import LogoSlider from "../components/LandingComponents/SectionThree/LogoSlider";

// import Filter from "../components/Filter/Filter";
import DropMenu from "../components/DropMenu";
import MainCategorie from "../components/CategorieComponents/MainCategorie";
import MainCards from "../components/MainSubCategories/MainCards";
import OurStory from "../components/OurStory/OurStory";
const LandingPage = () => {
  return (
    <Layout>
      <MainCategorie/>
      {/* <SectionPub /> */}
      {/* <Filter /> */}
      {/* <DropMenu /> */}
      <Women />
      <Men />
      <Kids />
      <MainCards/>
      <OurStory/>
      <LogoSlider/>
      <Video />
    </Layout>
  );
};

export default LandingPage;
