import React from "react";

import SectionAbout from "../sectionAbout/SectionAbout";
import SectionFeature from "../sectionFeatures/SectionFeatures";
import SectionTours from "../sectionTours/SectionTours";
import Stories from "../sectionStories/sectionStories";
import SectionBooking from "../sectionBooking/SectionBooking";

const Body = () => {
  return (
    <main>
      <SectionAbout />
      <SectionFeature />
      <SectionTours />
      <Stories />
      <SectionBooking />
    </main>
  );
};

export default Body;
