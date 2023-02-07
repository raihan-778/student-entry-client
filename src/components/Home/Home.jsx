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

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E5FDD1",
        }}
      >
        <Navigation></Navigation>
        <StudentCard></StudentCard>
      </Box>
    </>
  );
};

export default Home;
