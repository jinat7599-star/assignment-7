import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

 
const rootElement = document.getElementById("root");
const appRoot = createRoot(rootElement);

appRoot.render(
  <StrictMode>
    <App />
    <Toaster 
      position="top-right" 
      reverseOrder={false} 
    />
  </StrictMode>
);