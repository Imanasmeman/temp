export const initialState = {
    email: "",
    password: "",
    isSubmitted: false,
  };
  
  export const formReducer = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      case "submit":
        return { ...state, isSubmitted: true };
      case "reset":
        return { email: "", password: "", isSubmitted: false };
      default:
        throw new Error("invalid action type");
    }
  };
  