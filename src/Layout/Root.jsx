import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppMenu from "../components/globalComponent/AppMenu";

const Root = () => {
  return (
    <Container sx={{ width: "100vw" }} maxWidth="lg">
      <AppMenu></AppMenu>
      <Outlet></Outlet>;
    </Container>
  );
};
export default Root;
