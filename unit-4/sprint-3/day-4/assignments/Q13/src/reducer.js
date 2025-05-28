

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COFFEE_LOADING':
      return { ...state, loading: true, error: false };
    case 'COFFEE_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'COFFEE_ERROR':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
