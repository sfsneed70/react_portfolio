import { useState } from "react";
import { validateEmail } from "../utils/helpers.js";

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === "name") {
      setName(value);
    } else if (name === "message") {
      setMessage(value);
    } else {
      setEmail(value);
    }
  };

  const validateInput = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrorMessage("email address is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!value.length) {
        setErrorMessage(`${name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="container mx-5 my-5 fs-5">
      <h1>Contact</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <p className="my-3">Name:</p>
        <input
          size="50"
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={validateInput}
          type="text"
          placeholder="Name"
          required
        />
        <br />
        <p className="my-3">Email address:</p>
        <input
          size="50"
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={validateInput}
          type="email"
          placeholder="Email address"
          required
        />
        <br />
        <p className="my-3">Message:</p>
        <textarea
          rows="10"
          cols="49"
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={validateInput}
          type="text"
          placeholder="Message"
          required
        />
        <br />
        <p>{errorMessage}</p>
        <button type="submit" className="my-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
