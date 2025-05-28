import { SET_FILTER } from "../actions/bookActions";

const initialFilter = {
  author: "",
  genre: "",
  readStatus: "all", 
};

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filterReducer;
