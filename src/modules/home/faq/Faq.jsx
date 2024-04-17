import React from "react";
import Header from "../../header/Header";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../footer/Footer";
import "./Faq.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItemTags from "../faqdropdown/FaqDropdown";
import CommonButton from "../../button/CommonButton";
import FaqImg from "../../../assets/images/faq/images/faqimg.svg";
import ActiveIcon from "../../../assets/images/coursedetail/icons/Arrow - Down 2.svg";
import InactiveIcon from "../../../assets/images/coursedetail/icons/dropdowInactive.svg";

const Faq = () => {
  const dropDowns = [
    {
      id: "1",
      dropdownTitle: "What Does Royalty Free Mean?",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque. Quisque non tellus orci ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat. Nulla facilisi nullam vehicula ipsum.Tortor condimentum lacinia quis vel eros donec. Pharetra sit amet aliquam id diam.Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "2",
      dropdownTitle: "What Does Royalty Free Mean?",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque. Quisque non tellus orci ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat. Nulla facilisi nullam vehicula ipsum.Tortor condimentum lacinia quis vel eros donec. Pharetra sit amet aliquam id diam.Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "3",
      dropdownTitle: "What Does Royalty Free Mean?",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque. Quisque non tellus orci ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat. Nulla facilisi nullam vehicula ipsum.Tortor condimentum lacinia quis vel eros donec. Pharetra sit amet aliquam id diam.Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "4",
      dropdownTitle: "What Does Royalty Free Mean?",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque. Quisque non tellus orci ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat. Nulla facilisi nullam vehicula ipsum.Tortor condimentum lacinia quis vel eros donec. Pharetra sit amet aliquam id diam.Quis ipsum suspendisse ultrices gravida.",
    },
  ];
  return (
    <div className="faq-container">
        <Header />

      <div className="faq-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      <div className="container">
        <div className="row head-dropdown">
          {/* <div className="head-dropdown d-flex justify-content-between"> */}
            <div className="col-lg-10">
              <h2>Frequently asked questions</h2>
            </div>
            <div className="col-lg-2 d-flex justify-content-center mb-5">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Students
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          {/* </div> */}
        </div>
        <div className="drops">
          <div className="row">
            <div className="col-lg-6" style={{ paddingTop: "5rem" }}>
              {dropDowns.map((items) => (
                <div key={items.id}>
                  <DropdownItemTags
                    dropdownTitle={items.dropdownTitle}
                    activeIcon={ActiveIcon}
                    inactiveIcon={InactiveIcon}
                    para={items.para}
                  />
                </div>
              ))}
              <div className="form-sec">
                <h5>Couldn't find your answer!</h5>
                <p>
                  Don’t worry, write your question here and our support team
                  will help you.
                </p>
                <div className="faq-input-contain mt-4">
                  <input type="text" placeholder="Subject" />
                  {/* <div className="message"> */}
                  <textarea type="text" placeholder="Message" />

                  {/* </div> */}
                  <div style={{maxWidth:"100%" , display:"flex" ,  justifyContent:"center" ,marginTop:"0.5rem"}}>
                  <CommonButton
                    backgroundColor="#F57005"
                    fontColor="white"
                    label="Submit Question"
                  />
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={{ paddingTop: "5rem" }}>
              {dropDowns.map((items) => (
                <div key={items.id}>
                  <DropdownItemTags
                    dropdownTitle={items.dropdownTitle}
                    activeIcon={ActiveIcon}
                    inactiveIcon={InactiveIcon}
                    para={items.para}
                  />
                </div>
              ))}
              <div className="img-contain">
                <img src={FaqImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Faq;
