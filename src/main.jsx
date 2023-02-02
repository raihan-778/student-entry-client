import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import { router } from "./Layout/router";
import { theme } from "./Theme/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </RouterProvider>
    <CssBaseline />
  </React.StrictMode>
);
