import React from "react";

function FeatureBox({ title, icon, text }) {
  let classIcon = `feature-box__icon icon-basic-${icon}`;

  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={classIcon}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">
          {title}
        </h3>
        <p className="feature-box__text">
          {text}
        </p>
      </div>
    </div>
  );
}

export default FeatureBox;
