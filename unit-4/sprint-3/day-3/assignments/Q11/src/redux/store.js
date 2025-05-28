import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { footballReducer } from "./reducer";
import { thunk } from "redux-thunk"; 

const store = createStore(footballReducer, applyMiddleware(thunk));

export { store };
