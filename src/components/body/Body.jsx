import React from "react";

import SectionAbout from "../sectionAbout/SectionAbout";
import SectionFeature from "../sectionFeatures/SectionFeatures";
import SectionTours from "../sectionTours/SectionTours";
import Stories from "../sectionStories/sectionStories";
import SectionBooking from "../sectionBooking/SectionBooking";
import PopUp from "../popUp/PopUp";
import Footer from "../footer/Footer";

const Body = () => {
  return (
    <>
      <PopUp />
      <main>
        <SectionAbout />
        <SectionFeature />
        <SectionTours />
        <Stories />
        <SectionBooking />
      </main>
      <Footer />
    </>
  );
};

export default Body;
