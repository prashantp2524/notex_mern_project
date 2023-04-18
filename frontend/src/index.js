import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { UseCon } from "./UseContedxt";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UseCon>
      <Provider store={store}>
        <App />
      </Provider>
    </UseCon>
  </React.StrictMode>
);

reportWebVitals();
