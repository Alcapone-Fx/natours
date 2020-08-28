import React from "react";

function SectionBooking() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  id="name"
                  className="form__input"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  id="name"
                  className="form__input"
                  placeholder="Email address"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="small"
                    className="form__radio-input"
                    name="size"
                    required
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="large"
                    className="form__radio-input"
                    name="size"
                    required
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBooking;
