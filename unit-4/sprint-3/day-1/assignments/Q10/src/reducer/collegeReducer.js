export const initialState = {
    name: "",
    establishment_year: "",
    address: {
      building: "",
      street: "",
      city: {
        name: "",
        locality: {
          pinCode: "",
          landmark: ""
        }
      },
      state: "",
      coordinates: {
        latitude: "",
        longitude: ""
      }
    },
    courses_offered: []
  };
  
  export const collegeReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.payload.field]: action.payload.value
        };
  
      case "UPDATE_NESTED_FIELD":
        return {
          ...state,
          address: {
            ...state.address,
            [action.payload.field]: action.payload.value
          }
        };
  
      case "UPDATE_CITY_FIELD":
        return {
          ...state,
          address: {
            ...state.address,
            city: {
              ...state.address.city,
              [action.payload.field]: action.payload.value
            }
          }
        };
  
      case "UPDATE_LOCALITY_FIELD":
        return {
          ...state,
          address: {
            ...state.address,
            city: {
              ...state.address.city,
              locality: {
                ...state.address.city.locality,
                [action.payload.field]: action.payload.value
              }
            }
          }
        };
  
      case "UPDATE_COORDINATES":
        return {
          ...state,
          address: {
            ...state.address,
            coordinates: {
              ...state.address.coordinates,
              [action.payload.field]: action.payload.value
            }
          }
        };
  
      case "UPDATE_COURSES":
        return {
          ...state,
          courses_offered: action.payload
        };
  
      case "reset":
        return initialState;
  
      default:
        throw new Error("invalid action type");
    }
  };
  