
import React from "react";
import useFormState from "../hooks/useFormState";

const ContactForm = () => {
  const { formData, handleInputChange } = useFormState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
