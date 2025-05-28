// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { Provider } from "../../../../../sprint-4/day-1/assignments/ChakraCard/src/components/ui/provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <Provider>
    <App />
  </Provider>
);

