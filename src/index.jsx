import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

import { CartContextProvider } from "./context/cartContext";

import { GlobalStyles } from "./styles/global";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <CartContextProvider>
      <GlobalStyles />
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
