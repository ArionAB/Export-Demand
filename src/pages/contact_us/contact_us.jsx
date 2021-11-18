import React, { useState } from "react";
import { getFirebase } from "../../firebase/firebase.utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../contact_us/contact_us.styles.scss";

export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { email, name, subject, message } = contact;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      ...contact,
    };
    getFirebase()
      .database()
      .ref("Users/")
      .child("Messages/")
      .push(obj, (err) => {
        if (err) {
          console.log(err);
          toast.error(err, {
            position: "top-center",
          });
        } else
          toast.success("Message sent", {
            position: "top-center",
          });
      });

    setContact({
      email: "",
      subject: "",
      name: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <h1> Tell us more about what you're interested in</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          required
        ></input>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        ></input>
        <input
          name="subject"
          type="text"
          value={subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        ></input>
        <textarea
          className="textArea"
          col="40"
          rows="20"
          placeholder="Message"
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
