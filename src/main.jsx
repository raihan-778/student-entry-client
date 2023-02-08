import CssBaseline from "@mui/material/CssBaseline";

import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import AuthProvider from "./context/AuthProvider";
import "./index.css";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* </QueryClientProvider> */}

    <ToastContainer />
    <CssBaseline />
  </React.StrictMode>
);
