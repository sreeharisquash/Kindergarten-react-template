import React from "react";
import "./PortfolioDetail.css";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import PortfolioDetailimg from "../../../assets/images/portfoliodetail/images/portfolioimg.svg";
import Fb from "../../../assets/images/portfoliodetail/icons/portfoliodetail-fb.svg";
import Pint from "../../../assets/images/portfoliodetail/icons/portfoliodetail-pint.svg";
import Twit from "../../../assets/images/portfoliodetail/icons/portfoliodetail-twit.svg";
import Insta from "../../../assets/images/portfoliodetail/icons/portfoliodetail-insta.svg";
import Yt from "../../../assets/images/portfoliodetail/icons/portfoliodetail-yt.svg";
import Portfolioimg1 from "../../../assets/images/portfolio/images/portfolioimg-1.svg";
import Portfolioimg2 from "../../../assets/images/portfolio/images/portfolioimg-2.svg";
import Portfolioimg3 from "../../../assets/images/portfolio/images/portfolioimg-3.svg";
import Portfolioimg4 from "../../../assets/images/portfolio/images/portfolioimg-4.svg";
import Portfolioimg5 from "../../../assets/images/portfolio/images/portfolioimg-5.svg";
import Portfolioimg6 from "../../../assets/images/portfolio/images/portfolioimg-6.svg";
import HoverIcon1 from "../../../assets/images/portfolio/icons/hovericon-1.svg";
import HoverIcon2 from "../../../assets/images/portfolio/icons/hovericon-2.svg";

const PortfolioDetail = () => {
  const shareIcons = [
    { id: "1", icon: Fb },
    { id: "2", icon: Pint },
    { id: "3", icon: Twit },
    { id: "4", icon: Insta },
    { id: "5", icon: Yt },
  ];
  const portfolioImg = [
    { id: "1", image: Portfolioimg1, category: "Development" },
    { id: "2", image: Portfolioimg2, category: "Development" },
    { id: "3", image: Portfolioimg3, category: "Development" },
    { id: "4", image: Portfolioimg4, category: "Development" },
    { id: "5", image: Portfolioimg5, category: "Development" },
    { id: "6", image: Portfolioimg6, category: "Development" },
  ];
  return (
    <div className="portfoliodetail-container">
        <Header />

      <div className="portfolio-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <img src={PortfolioDetailimg} alt="" className="img-fluid" />
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
          donec turpis egestas volutpat. Quisque nec non amet quis. Varius
          tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit
          ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id
          cras purus. At eget euismod cursus non. Molestie dignissim sed
          volutpat feugiat vel enim eu turpis imperdiet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
          donec turpis egestas volutpat. Quisque nec non amet quis. Varius
          tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit
          ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id
          cras purus.
        </p>
        <div className="share-data">
          <h5>Share:</h5>
          {shareIcons.map((items) => (
            <div className="icons">
              <img src={items.icon} alt="" />
            </div>
          ))}
        </div>
        <div
          className="d-flex gap-2 mt-2 mb-4 hove-cont"
          style={{ alignItems: "baseline" }}
        >
          <h5>Project Link :</h5>
          <span>www.exmaple.com</span>
        </div>
        <p>
          In enim justo, rhoncus ut, imper diet a, venenat is vitae, justo. Null
          am dictum fel is eu pede moll is pret ium. Integer tincid unt. Cras
          dapibus. Vivamus elemen tum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, conse quat vitae, eleifend
          ac, enim. Aliq uam lorem ante
        </p>
    
      <div className="related-portfolio">
        <h2 style={{ marginBottom:"5rem"}}>Related Portfolio</h2>
        <div className="row">
          {portfolioImg.map((items) => (
            <div className="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center" key={items.id}>
              <div className=" portfolio-img">
                <div className="d-flex gap-3">
                  <img
                    src={HoverIcon1}
                    alt=""
                    className="hover-icon1"
                    style={{ width: "15%" }}
                  />
                  <img
                    src={HoverIcon2}
                    alt=""
                    className="hover-icon2"
                    style={{ width: "15%" }}
                  />
                </div>
                <p className="portfolio-category">{items.category}</p>
                <img src={items.image} alt="" style={{ maxWidth: "100%" }} />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PortfolioDetail;
