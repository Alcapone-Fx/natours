/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import natLarge1 from "../../assets/images/nat-1-large.jpg";
import nat1 from "../../assets/images/nat-1.jpg";
import natLarge2 from "../../assets/images/nat-2-large.jpg";
import nat2 from "../../assets/images/nat-2.jpg";
import natLarge3 from "../../assets/images/nat-3-large.jpg";
import nat3 from "../../assets/images/nat-3.jpg";
import "./Composition.scss";

function Composition() {
  const srcSet1 = `${nat1} 300w, ${natLarge1} 1000w`;
  const srcSet2 = `${nat2} 300w, ${natLarge2} 1000w`;
  const srcSet3 = `${nat3} 300w, ${natLarge3} 1000w`;
  return (
    <div className="composition">
      <img
        srcSet={srcSet1}
        src={nat1}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="Photo 1"
        className="composition__photo composition__photo--p1"
        />
      <img
        srcSet={srcSet2}
        src={nat2}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="Photo 2"
        className="composition__photo composition__photo--p2"
        />
      <img
        srcSet={srcSet3}
        src={nat3}
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="Photo 3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
}

export default Composition;
