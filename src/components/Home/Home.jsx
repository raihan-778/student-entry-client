import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
// import { Box, FormHelperText, Input, InputLabel } from "@mui/material";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import StudentCard from "../StudentInfo/StudentCard";
import Navigation from "./Navigation";
import Grid from "@mui/material/Grid";
import SideMenu from "./SideMenu";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E5FDD1",
      }}
    >
      <>
        <Grid sx={{}} container spacing={2}>
          <Grid item lg={2} xs={12}>
            <SideMenu></SideMenu>
          </Grid>
          <Grid item lg={2} xs={12}>
            <Navigation></Navigation>
          </Grid>
          <Grid item lg={10} xs={12}>
            <StudentCard></StudentCard>
          </Grid>
        </Grid>
      </>
    </Box>
  );
};

export default Home;
