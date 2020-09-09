import React from "react";

import Card from "../sectionToursCard/SectionToursCard";

function SectionTours() {
  const toursDetails = {
    easyDifficultyTour: [
      "3 day tour",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty: easy",
    ],
    mediumDifficultyTour: [
      "7 day tour",
      "Up to 40 people",
      "6 tour guides",
      "Sleep in provided tents",
      "Difficulty: medium",
    ],
    hardDifficultyTour: [
      "5 day tour",
      "Up to 15 people",
      "3 tour guides",
      "Sleep in provided tents",
      "Difficulty: hard",
    ],
  };

  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <Card
          heading="The sea explorer"
          cardModifier="1"
          details={toursDetails["easyDifficultyTour"]}
          price="297"
        />
        <Card
          heading="The forest hiker"
          cardModifier="2"
          details={toursDetails["mediumDifficultyTour"]}
          price="497"
        />
        <Card
          heading="The snow adventurer"
          cardModifier="3"
          details={toursDetails["hardDifficultyTour"]}
          price="897"
        />
      </div>
      <div className="u-center-text u-margin-bottom-big u-margin-top-huge">
        <a href="/" className="btn btn--green">Discover all tours</a>
      </div>
    </section>
  );
}

export default SectionTours;
