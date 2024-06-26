import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import "./styles/index.scss";
import {App} from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
