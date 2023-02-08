import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import Navigation from "../Home/Navigation";
import Login from "../SignUp/Login";
import { Link } from "react-router-dom";

// const pages = [<Navigation />, <Login />, "Logout"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="/logo.png"
              sx={{
                width: 32,
                height: 32,
                display: { xs: "none", md: "flex" },
              }}
            />
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Button textAlign="center">
                  <Navigation />
                </Button>

                <Button textAlign="center">Login</Button>
              </MenuItem>
            </Menu>
          </Box>

          <Stack
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              padding: 2,
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="../../../public/logo.png"
              sx={{
                width: 32,
                height: 32,
              }}
            />
          </Stack>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Navigation />
            </Button>
            <Link to="/login">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 0,
            }}
          >
            <Typography variant="h6" component="h6" sx={{ marginRight: 2 }}>
              User Email
            </Typography>
            <Tooltip title="Profile Picture">
              <Stack>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </Stack>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppMenu;
