import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    if (
      !formData.get("user_name") ||
      !formData.get("user_email") ||
      !formData.get("message")
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    emailjs
      .sendForm(
        "service_cotk5po",
        "template_hmum8es",
        form.current,
        "wAj_Hw4UNFoBdKX-g"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Send Successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message");
          form.current.reset();
        }
      );
  };
  return (
    <div className="contact-form">
      <Toaster position="top-center" reverseOrder={false} />
      <form ref={form} onSubmit={sendEmail}>
        <div className="label-wrapper">
          <input type="text" id="myInput" name="myInput" required="required" />
          <label for="myInput" className="hide-cls">
            Name
          </label>
        </div>
        <input type="email" name="user_email" placeholder="Email" />
        <div className="label-wrapper input-wrapper-number">
          <input type="number" name="number" required="required"/>
          <label for="myInput" className="hide-cls">
          Phone Number
          </label>
        </div>
        <textarea name="message" placeholder="Message"></textarea>
        <input type="submit" value="Send" className="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
