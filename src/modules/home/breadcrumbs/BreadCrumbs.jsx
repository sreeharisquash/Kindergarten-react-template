
import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  let breadcrumbPath = "Home";
  let currentLink = "/";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `${index === 0 ? "" : "/"}${crumb}`;
      breadcrumbPath += ` / ${crumb}`;

      return (
        <span key={crumb}>
          {index < array.length - 1 ? (
            <Link to={currentLink} className="crumb-link">
              {crumb}
            </Link>
          ) : (
            <h1 className="crumb">{crumb}</h1>
          )}
          {index < array.length - 1 && <span> / </span>}
        </span>
      );
    });

  const navigateLinks = breadcrumbPath
    .split(" / ")
    .map((section, index, array) => {
      // const path = array.slice(0, index + 1).join(" / ");
      return (
        <span key={index}>
          {index < array.length - 1 && (
            <>
              <a href='/' className="navigate-link">
                {section}
              </a>
              <span> > </span>
            </>
          )}
          {index === array.length - 1 && <span className="orange-cls">{section}</span>}
        </span>
      );
    });

  return (
    <div className="bread-crumbs">
      <h1 className="text-white">{crumbs}</h1>
      <h4>{navigateLinks}</h4>
    </div>
  );
};

export default BreadCrumbs;
