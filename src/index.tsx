import React from "react";
import ReactDOM from "react-dom";
import store from "./store";

import "./styles/global.ts";

import { App } from "./App";

import { makeServer } from "./services/server";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
