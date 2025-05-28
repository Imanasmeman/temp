import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ChProvider } from "./components/ui/provider";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChProvider>
        <App />
      </ChProvider>
    </Provider>
  </React.StrictMode>
);
