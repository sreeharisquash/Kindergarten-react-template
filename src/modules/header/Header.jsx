import React, { startTransition, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import LOGO from "../../assets/logo/kindergarten-logo.svg";
import CommonButton from "../button/CommonButton";
import Profile from "../../assets/icons/user-circle.svg";
import Search from "../../assets/icons/regularsearch-alt.svg";
import SearchPopup from "./searchpopup/SearchPopup";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState();
  const [navbar, setNavbar] = useState(false);
  const popupRef = React.useRef(null);
  const location = useLocation();

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleBackgroundChange = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", handleBackgroundChange);
  return (
    // <nav className={`sticky-top navBg navbar-expand-xl ${navbar ? 'navbar active' : 'navbar'}`}>
    <nav
      className={`sticky-top navBg navbar-expand-xl ${
        navbar ? "navbar active" : "navbar"
      }`}
    >
      <div className="container">
        <Link to="/">
          <div className="nav-contain">
            <img src={LOGO} alt="logo" />
          </div>
        </Link>
        <button
          className="navbar-toggler customBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navBarData ms-auto">
            {/* <li className="nav-item dropdown"> */}
            <li
              className={`nav-item dropdown ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link colorForNavFont" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item dropdown"> */}
            <li
              className={`nav-item dropdown ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link colorForNavFont" to="/about">
                About
              </Link>
            </li>
            {/* <li className="nav-item"> */}
            <li
              className={`nav-item dropdown ${
                location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              <Link className="nav-link colorForNavFont" to="/portfolio">
                Porfolio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link colorForNavFont "
                href="#pages"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <Link className="dropdown-item" to="/courses">
                  Courses
                </Link>
                <Link className="dropdown-item" to="/blog">
                  Blog
                </Link>
                <Link className="dropdown-item" to="/coming-soon">
                  Coming Soon
                </Link>
                <Link className="dropdown-item" to="/faq">
                  Faq
                </Link>
              </div>
            </li>
            {/* <li className="nav-item"> */}
            <li
              className={`nav-item dropdown ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link className="nav-link colorForNavFont" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav right-container-nav ms-auto">
            <div className="dis-none">
              <li className="nav-item">
                <a className="nav-link colorForNavFont " href="#">
                  <img src={Search} alt="" onClick={handlePopup} />
                </a>
                {isOpen ? <SearchPopup /> : ""}
              </li>
              <li className="nav-item">
                <a className="nav-link colorForNavFont" href="#">
                  <img src={Profile} alt="" />
                </a>
              </li>
            </div>
            <li className="nav-item">
              <CommonButton
                label="Get Started"
                backgroundColor="#F57105"
                fontColor="white"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
