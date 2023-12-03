import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    localStorage.setItem("nameInput", nameInput);
  }, [nameInput]);

  useEffect(() => {
    localStorage.setItem("emailInput", emailInput);
  }, [emailInput]);

  useEffect(() => {
    localStorage.setItem("commentInput", commentInput);
  }, [commentInput]);

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };
  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          className="form-input"
          value={nameInput}
          onChange={handleNameInput}
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="form-input"
          value={emailInput}
          onChange={handleEmailInput}
          placeholder="Email"
        />
        <textarea
          name="text"
          className="form-input"
          value={commentInput}
          onChange={handleCommentInput}
          placeholder="Comment"
        ></textarea>
        <input
          type="submit"
          className="submit-btn"
          value="SUBMIT"
          onChange={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Contact;
