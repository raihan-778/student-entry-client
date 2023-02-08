import React from "react";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import ListItemIcon from "@mui/material/ListItemIcon";

import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const SideMenu = () => {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAddAltIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/add-student">Add Student</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          <Link to="/login">Login</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Button varient="contained">Log Out </Button>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
