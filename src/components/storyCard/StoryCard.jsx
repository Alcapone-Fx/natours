import React from "react";

function StoryCard({ story }) {
  return (
    <div className="story">
      <figure className="story__shape">
        <img
          className="story__img"
          src={story.imageUrl}
          alt="Person on a tour"
        />
        <span className="story__caption">{story.name}</span>
      </figure>
      <div className="story-text">
        <h3 className="heading-tertiary u-margin-bottom-small">
          {story.title}
        </h3>
        <p>{story.text}</p>
      </div>
    </div>
  );
}

export default StoryCard;
