import React from "react";
import "./Footer.css";
import CloudImg from "../../../assets/images/footer/images/footer-cloud.svg";
import Logo from "../../../assets/logo/kindergarten-logo.svg";
import FbLogo from "../../../assets/images/footer/icons/footer-fb.svg";
import TwitLogo from "../../../assets/images/footer/icons/footer-twit.svg";
import LinkdinLogo from "../../../assets/images/footer/icons/footer-linkdin.svg";
import CommonButton from "../../button/CommonButton";
import Balloon1 from "../../../assets/images/footer/images/footerballoon-1.svg";
import Balloon2 from "../../../assets/images/footer/images/footerballoon-2.svg";
import Balloon3 from "../../../assets/images/footer/images/footerballoon-3.svg";
import RocketImg from "../../../assets/images/footer/images/footerocket.svg";
import SmallBalloon1 from "../../../assets/images/footer/images/smallballoon-1.svg";
import SmallBalloon2 from "../../../assets/images/footer/images/smallballoon-2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const icons = [
    { id: "1", icon: FbLogo },
    { id: "2", icon: TwitLogo },
    { id: "3", icon: LinkdinLogo },
  ];

  const company = [
    { id: "1", para: "Lorem ipsum " },
    { id: "2", para: "Commodo " },
    { id: "3", para: "Lorem ipsum " },
    { id: "4", para: "Commodo " },
  ];

  const links = [
    { id: "1", para: "Lorem ipsum " },
    { id: "2", para: "Commodo " },
    { id: "3", para: "Lorem ipsum " },
    { id: "4", para: "Commodo " },
  ];
  const contact = [
    { id: "1", para: "845-522-8279", class: "footer-number" },
    { id: "2", para: "company@example.com", class: "footer-mail" },
    {
      id: "3",
      para: "254 Route 17k suite 201 Newburgh,NY 12550",
      class: "footer-loc",
    },
  ];
  return (
    <>
      <div className="footer-container">
        <div className="container">
          <img src={Balloon1} alt="" className="balloon-1" />
          <img src={Balloon2} alt="" className="balloon-2" />
          <img src={Balloon3} alt="" className="balloon-3" />
          <img src={RocketImg} alt="" className="footer-rocket" />
          <img src={SmallBalloon1} alt="" className="smallballoon-1" />
          <img src={SmallBalloon2} alt="" className="smallballoon-2" />
          <div className="cloud-section">
            {/* <img src={CloudImg} alt="" className="cloud-img img-fluid" /> */}
            <div className="container">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="col-lg-8 d-flex justify-content-center">
                  <h2>get Free Pro Membership For Your High School Classes</h2>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <CommonButton
                    backgroundColor="#F57005"
                    fontColor="white"
                    label="Get started now"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5">
            <div className="col-lg-4 mb-5">
              <Link to="/">
                <div>
                  <img src={Logo} alt="" />
                </div>
              </Link>
              <p className="mt-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex dolor sit amet, magnaconsectetur
                adipiscing elit incididunt ut labore et dolore magna aliqua.et
                dolore magna aliqua.{" "}
              </p>
              <div className="d-flex gap-3 mt-4">
                {icons.map((items) => (
                  <div key={items.id}>
                    <img src={items.icon} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-2 mb-5">
              <h3 className="mb-4">Company</h3>
              {company.map((items) => (
                <div key={items.id} className="pt-2">
                  <p>{items.para}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-2 mb-5">
              <h3 className="mb-4">Useful links</h3>
              {links.map((items) => (
                <div key={items.id} className="pt-2">
                  <p>{items.para}</p>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <h3 className="mb-4">Contact Us</h3>
              {contact.map((items) => (
                <div key={items.id} className="pt-2">
                  <p className={items.class}>{items.para}</p>
                </div>
              ))}
              <div className="col-lg-4 d-flex flex-column justify-content-center mail-button">
                <div className="d-flex">
                  <input
                    type="text"
                    className="mail-box"
                    placeholder="Enter Email Address"
                  />

                  <CommonButton
                    backgroundColor="#F57005"
                    fontColor="white"
                    label="Subscribe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <div className="container">
          <p className="text-center">
            © Copyright Page Perfect All Rights Reserved 2023
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
