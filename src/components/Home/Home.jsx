import React from "react";
import { useState } from "react";

import { Box, FormHelperText, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "primary.dark",
      }}
    >
      <Button
        sx={{
          color: "white",
          backgroundColor: "orange",
          margin: "10px 20px",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <div>
        <FormControl>
          <InputLabel
            sx={{
              color: "#d2a5fe",
            }}
            htmlFor="my-input"
          >
            Email
          </InputLabel>
          <Input
            sx={{
              color: "#e1f5fe",
            }}
            type="email"
            placeholder="Enter your Email"
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <FormHelperText
            sx={{
              color: "#e1f5fe",
            }}
            id="my-helper-text"
          >
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </div>
    </Box>
  );
};

export default Home;
