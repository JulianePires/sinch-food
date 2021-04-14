import React from "react";
import ReactDOM from "react-dom";
import store from "./store";

import "./styles/global.ts";

import { App } from "./App";

import { makeServer } from "./services/server";
import { Provider } from "react-redux";
import { defaultTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
