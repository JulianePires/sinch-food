import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import "./styles/global.ts";

import { App } from "./App";

import { makeServer } from "./services/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
