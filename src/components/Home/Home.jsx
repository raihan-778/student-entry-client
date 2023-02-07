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

const Home = () => {
  return (
    <Box
      fullWidth
      sx={{
        backgroundColor: "#E5FDD1",
      }}
    >
      <>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Navigation></Navigation>
          </Grid>
          <Grid item xs={10}>
            <StudentCard></StudentCard>
          </Grid>
        </Grid>
      </>
    </Box>
  );
};

export default Home;
