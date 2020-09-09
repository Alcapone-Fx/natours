import React from "react";

function SectionToursCard({ heading, details, cardModifier, price }) {
  const classCardPicture = `card__picture card__picture--${cardModifier}`;
  const classHeadingSpan = `card__heading-span card__heading-span--${cardModifier}`;
  const classCardSideBack = `card__side card__side--back card__side--back--${cardModifier}`;

  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={classCardPicture}> </div>
          <h4 className="card__heading">
            <span className={classHeadingSpan}>{heading}</span>
          </h4>
          <div className="card__details">
            <ul>
              {details.map((detail, index) => {
                return <li key={`li${index}`}>{detail}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={classCardSideBack}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">${price}</p>
            </div>
            <a aria-label="button" href="#popup" className="btn btn--white">
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionToursCard;
