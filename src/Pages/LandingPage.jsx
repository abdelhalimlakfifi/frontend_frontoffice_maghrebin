import React from "react";

import Women from "../components/LandingComponents/SectionTwo/SectionWomen/Women"
import Men from "../components/LandingComponents/SectionTwo/SectionMen/Men"
import Kids from "../components/LandingComponents/SectionTwo/SectionKids/Kids"

import Video from "../components/LandingComponents/SectionThree/Video"
import Layout from "../components/Layout/Layout";
import MainCategorie from "../components/CategorieComponents/MainCategorie";

const LandingPage = () => {
  return (
    <Layout>
      <MainCategorie />
      <Women />
      <Men />
      <Kids />
      <Video />
    </Layout>
  );
};

export default LandingPage;
