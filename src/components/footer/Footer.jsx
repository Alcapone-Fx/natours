import React from "react";

import logo1 from "../../assets/images/logo-green-1x.png";
import logo2 from "../../assets/images/logo-green-2x.png";
import logoSmall1 from "../../assets/images/logo-green-small-1x.png";
import logoSmall2 from "../../assets/images/logo-green-small-2x.png";

function Footer() {
  const srcSetImg = `${logo1} 1x, ${logo2} 2x`;
  const srcSetSource = `${logoSmall1} 1x, ${logoSmall2} 2x`;
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture  className="footer__logo">
          <source srcSet={srcSetSource} media="(max-width: 37.5em)"/>
          <img srcset={srcSetImg} alt="Full logo"/>
        </picture>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a
                href="https://github.com/Alcapone-Fx"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Felix Navas
              </a>{" "}
              Copyright &copy; design by Jonas Schmedtmann.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
