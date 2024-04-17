import React, { startTransition } from "react";
import "./ErrorPage.css";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import ErrorImg from "../../../assets/images/404error/images/errorimg.svg";
import CommonButton from "../../button/CommonButton";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateClick = () => {
    startTransition(() => {
      navigate("/");
    });
  };
  return (
    <div className="error-container">
      <div className="error-breadcrumb">
        <div className="head-sec">
          <Header />
        </div>

        <div className="mt-5">
          <h1>ERROR</h1>
          <h4 onClick={navigateClick}>
            Home > <span className="color-orange">Error</span>
          </h4>
        </div>
      </div>

      <div className="container error-msg">
        <img src={ErrorImg} alt="" style={{ maxWidth: "100%" }} />
        <h2 className="mt-5">Error 404</h2>
        <h3>Oops! page not found</h3>
        <p className="text-center mt-4">
          Something went wrong. It’s look that your requested could not be
          found. It's look like the link is broken or the page is removed.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <a href="/">
            <CommonButton
              backgroundColor="#F57005"
              fontColor="white"
              label="Go Back"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ErrorPage;
