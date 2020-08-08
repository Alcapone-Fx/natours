/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import nat1 from "../../assets/images/nat-1-large.jpg";
import nat2 from "../../assets/images/nat-2-large.jpg";
import nat3 from "../../assets/images/nat-3-large.jpg";
import "./Composition.scss";

function Composition() {
  return (
    <div className="composition">
      <img
        src={nat1}
        alt="Photo 1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={nat2}
        alt="Photo 2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={nat3}
        alt="Photo 3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
}

export default Composition;
