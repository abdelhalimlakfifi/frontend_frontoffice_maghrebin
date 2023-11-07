
import SectionPub from "../../components/LandingComponents/SectionOne/SectionPub";
import Women from "../../components/LandingComponents/SectionTwo/SectionWomen/Women"
import Men from "../../components/LandingComponents/SectionTwo/SectionMen/Men"
import Kids from "../../components/LandingComponents/SectionTwo/SectionKids/Kids"

import Video from "../../components/LandingComponents/SectionThree/Video";

const LandingPage = () => {
  return (
    <>
      <SectionPub />
      <Women />
      <Men />
      <Kids />
      <Video />
    </>
  );
};

export default LandingPage;
