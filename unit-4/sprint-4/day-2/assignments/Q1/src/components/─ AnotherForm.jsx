
import React from "react";
import useFormState from "../hooks/useFormState";

const AnotherForm = () => {
  const { formData, handleInputChange } = useFormState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Another Form Submitted: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AnotherForm;
