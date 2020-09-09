import React from "react";

import image1 from "../../assets/images/nat-8.jpg";
import image2 from "../../assets/images/nat-9.jpg";

function PopUp() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={image1} alt="Tour" className="popup__img" />
          <img src={image2} alt="Tour" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please reade these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod
            necessitatibus pariatur vitae, facilis magni, alias omnis
            accusantium at quos provident odit perferendis et sequi aut dolorem
            unde ut? Accusamus. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Placeat nisi repudiandae fugiat officiis, enim,
            sapiente impedit adipisci qui voluptatum molestiae, minima
            recusandae quo. Odio in adipisci amet cumque dolores quasi.
          </p>
          <a href="/" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
