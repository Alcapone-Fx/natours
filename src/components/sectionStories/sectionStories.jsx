import React from "react";

import Story from "../storyCard/StoryCard";
import image1 from "../../assets/images/nat-8.jpg";
import image2 from "../../assets/images/nat-9.jpg";
import videoMP4 from "../../assets/images/video.mp4";
import videoWEBM from "../../assets/images/video.webm";

function SectionStories() {
  const stories = {
    1: {
      name: "Mary Smith",
      title: "I had the best week ever with my family",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
    numquam quas consectetur vero ipsum enim quo? Dolores delectus at,
    tempore dolor vero consequatur eveniet sapiente eos similique quisquam
    quis deserunt. Dolores delectus at,
    tempore dolor vero consequatur eveniet sapiente eos similique.`,
      imageUrl: image1,
    },
    2: {
      name: "Jack Wilson",
      title: "WOW! My life is completely different now",
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
    numquam quas consectetur vero ipsum enim quo? Dolores delectus at,
    tempore dolor vero consequatur eveniet sapiente eos similique quisquam
    quis deserunt. Dolores delectus at,
    tempore dolor vero consequatur eveniet sapiente eos similique.`,
      imageUrl: image2,
    },
  };

  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videoMP4} type="video/mp4" />
          <source src={videoWEBM} type="video/webm" />
          Your browser is not supported.!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <Story story={stories[1]} />
      </div>
      <div className="row">
        <Story story={stories[2]} />
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default SectionStories;
