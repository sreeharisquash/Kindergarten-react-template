import React from "react";
import "./ContactUs.css";
import Header from "../../header/Header";
import Footer from "../footer/Footer";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import GoogleMap from "../googleMap/GoogleMap";
import ContactForm from "../contactform/ContactForm";
import { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const contactData = [
    { id: "1", head: "Phone", detail: "(229) 555-0109", class: "phone-cls" },
    { id: "2", head: "Fax", detail: "(808) 555-0111", class: "fax-cls" },
    {
      id: "3",
      head: "Email",
      detail: "willie@example.com",
      class: "email-cls",
    },
  ];
  return (
    <div className="contactus-container">
        <Header />
      <div className="contact-breadcrumb">
        <div className="mt-5">
          <BreadCrumbs />
        </div>
      </div>
      {/* <div className=""> */}
        <div className="container ">
          <div className="row contact-data">
            <div className="col-lg-7 mb-5 ">
              <h2>
                Get in <span style={{ color: "#F57005" }}>Touch</span>
              </h2>
              <p>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <ContactForm />
              <div className="contact-type">
                {contactData.map((items) => (
                  <div className={items.class} key={items.id}>
                    <div className="info">
                      <h5>{items.head}</h5>
                      <p>{items.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            {/* </div> */}
          </div>

          <div className="col-lg-5 margin-cls" >
            <GoogleMap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
