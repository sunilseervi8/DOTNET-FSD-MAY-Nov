import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContext } from "../../Context/appContext";

// Custom Font (Roboto)
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

// Styled search components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#CADCFC", 0.15), // Lighter color
  "&:hover": {
    backgroundColor: alpha("#CADCFC", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const pages = ["Business", "General", "Health", "Science", "Sports", "Technology"];
const settings = ["Profile", "registration", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  const clickHandler = () => {
    if (search !== "") {
      navigate(`/${search}`);
      setSearch("");
    }
  };
  function handleLogout(){
    console.log("clicked");
    
  }
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: "#00246B" }}> {/* Main color */}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LanguageIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: "30px", color: "#CADCFC" }} /> {/* Accent color */}

            <Typography
              variant="h6"
              // noWrap
              component={Link}
              to="*"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Roboto",
                color: "#CADCFC", // Lighter color
                textDecoration: "none",
              }}
            >
              News
            </Typography>

            {/* Mobile Menu */}
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase().replace(" ")}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Roboto",
                color: "#CADCFC", // Lighter color
                textDecoration: "none",
              }}
            >
              News
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase().replace(" ", "-")}`}
                  sx={{
                    my: 2,
                    color: "#CADCFC", // Lighter color
                    display: "block",
                    "&:hover": {
                      backgroundColor: "#37475A",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={changeHandler}
                  value={search}
                  name="search"
                />
              </Search>
              <Button
                onClick={clickHandler}
                sx={{ backgroundColor: "#CADCFC", color: "#00246B", ml: 1, "&:hover": { backgroundColor: "#8697C4" } }}
              >
                Search
              </Button>
            </Box>

            {/* User Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
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
                {(
                  // console.log(myuserContext.isLoggedIn), myuserContext.isLoggedIn ?
                  (settings.map((setting) => (
                    <MenuItem key={setting}  >
                      <Typography textAlign="center" component={Link} to={`/${setting.toLowerCase().replace(" ")}`}>{setting}</Typography >
                    </MenuItem>
                  )))
                  // :(<MenuItem onClick={handleLogin} >Login</ MenuItem> ) 
                  // onClick={setting === "Logout" ?handleLogout : handleCloseUserMenu}
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
