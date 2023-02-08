import { Box, Container } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Layout/router";

function App() {
  return (
    <Box className="app">
      <RouterProvider router={router}>
        <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        </Container>
      </RouterProvider>
    </Box>
  );
}

export default App;
