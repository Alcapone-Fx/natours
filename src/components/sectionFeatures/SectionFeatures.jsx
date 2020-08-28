import React from "react";

import FeatureBox from "../featureBox/FeatureBox";

function SectionFeatures() {
  return (
    <section className="section-features">
      <div className="row">
        <FeatureBox
          title="Explore the world"
          icon="world"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              perferendis, libero ipsa assumenda."
        />
        <FeatureBox
          title="Meet nature"
          icon="compass"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              perferendis, libero ipsa assumenda."
        />
        <FeatureBox
          title="Find your way"
          icon="map"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              perferendis, libero ipsa assumenda."
        />
        <FeatureBox
          title="Live a healther life"
          icon="heart"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
              perferendis, libero ipsa assumenda."
        />
      </div>
    </section>
  );
}

export default SectionFeatures;
