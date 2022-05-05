import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

// Uses the Msal2Provider to enable permissions
Providers.globalProvider = new Msal2Provider({
  clientId: process.env.REACT_APP_CLIENT_ID,
  scopes: ["User.Read", "User.Read.All", "Files.Read", "Files.ReadWrite.All"],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
