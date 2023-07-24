import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./styles/theme";

import { UnderDevelopment } from "./pages/UnderDevelopment";
// import { App } from "./pages/App";
import { ThemeProvider } from "styled-components";

import "./i18n";
import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<UnderDevelopment />} />
          {/* <Route path="app" element={<App />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
