import React from "react";

import logo from "../../assets/images/logo-green-2x.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Full logo" className="footer__logo"/>
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
