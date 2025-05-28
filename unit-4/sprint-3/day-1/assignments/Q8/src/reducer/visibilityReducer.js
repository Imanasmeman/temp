export const initialState = {
    isVisible: false,
  };
  
  export const visibilityReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_VISIBILITY":
        return { ...state, isVisible: !state.isVisible };
      default:
        return state;
    }
  };
  