import React from "react";

import Composition from "../composition/Composition";

function SectionAbout() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-terciary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            perferendis, libero ipsa assumenda praesentium repellendus possimus
            sapiente distinctio vitae sunt ut delectus velit qui. Voluptatem
            quam consequuntur at culpa laudantium!
          </p>

          <h3 className="heading-terciary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
            perferendis, libero ipsa assumenda.
          </p>

          <a href="/" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <Composition />
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
