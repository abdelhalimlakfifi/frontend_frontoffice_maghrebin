import React from "react";
import SectionPub from "../components/LandingComponents/SectionOne/SectionPub";

import Women from "../components/LandingComponents/SectionTwo/SectionWomen/Women"
import Men from "../components/LandingComponents/SectionTwo/SectionMen/Men"
import Kids from "../components/LandingComponents/SectionTwo/SectionKids/Kids"

import Video from "../components/LandingComponents/SectionThree/Video"
import Layout from "../components/Layout/Layout";
import Filter from "../components/Filter/Filter";

const LandingPage = () => {
  return (
    <Layout>
      <SectionPub />
      <Filter />
      <Women />
      <Men />
      <Kids />
      <Video />
    </Layout>
  );
};

export default LandingPage;
