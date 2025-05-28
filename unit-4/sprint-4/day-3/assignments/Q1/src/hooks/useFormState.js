import { useState } from "react";

const useFormState = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    formData: state,
    handleInputChange,
  };
};

export default useFormState;
