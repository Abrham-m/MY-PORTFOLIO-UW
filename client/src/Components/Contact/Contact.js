import React, { useState } from "react";
import "./Contact.css";
import image from "./Contact-Image/contact-us.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const API = "https://portfolio-website-6q7y.onrender.com/sendemail";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobType, setJobType] = useState("");
  const [message, setMessage] = useState("");

  const notify = (input) => toast.error(`Please fill ${input} in the form`);

  const sendMailInfo = () => {
    fetch(API, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email: email,
        jobType,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setName("");
          setEmail("");
          setJobType("");
          setMessage("");
          toast.success(
            `Email has been sent and I will get back to you shortly`,
            {
              autoClose: 5000,
              toastId: "success2",
            }
          );
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container contact-section" id="contact">
      <ToastContainer position="bottom-center" limit={1} autoClose={4000} />
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5">
          <div className="contact-form-image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-7 col-sm-7">
          <div className="contact-form-container">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
            <form action="">
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact-form">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="contact-form">
                <label>Job Types</label>
                <select
                  className="contact-select-option"
                  id=""
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="DEFAULT" disabled hidden>
                    Choose here
                  </option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Fixed Price">Fixed Price</option>
                  <option value="Hourly">Hourly</option>
                </select>
              </div>
              <div className="contact-form">
                <label>Message</label>
                <textarea
                  rows="5"
                  type="text"
                  className="form-control"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="submit-button">
                <p
                  onClick={
                    !name
                      ? () => notify("Name") // the name input field is empty
                      : !email
                      ? () => notify("Email") // the email input field is empty
                      : !message
                      ? () => notify("Message") // the message input field is empty
                      : !jobType
                      ? () => notify("Job Type") // the message input field is empty
                      : () => {
                          sendMailInfo();
                        } // all inputs are inserted email is on its way
                  }
                >
                  Send
                  <FaTelegramPlane size={23} className="send-message-icon" />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
