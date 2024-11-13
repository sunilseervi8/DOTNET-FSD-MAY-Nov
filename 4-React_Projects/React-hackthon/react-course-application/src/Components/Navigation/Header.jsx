import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GradingIcon from '@mui/icons-material/Grading';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import toast from 'react-hot-toast';

export default function Navbar() {
  const loginStatus = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function handleLogout() {
    navigate('/login');
    dispatcher(logout());
    toast.success("Logout Successful");
  }

  const handleSearch = (event) => {
    // Add your search functionality here
    console.log('Search term:', event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '60px' }}>
      <AppBar position="static" sx={{ backgroundColor: '#00246B' }}>
        <Toolbar>
          {/* Logo/Home Icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <HomeIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LMS
          </Typography>
          
          {/* Menu for mobile screens */}
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex', gap: '20px' }}>
                <Typography
                  variant="h6"
                  sx={{ color: 'white', textDecoration: 'none' }}
                  component={Link}
                  to="/addCourse"
                >
                  <AddBoxIcon />
                  Add Course
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: 'white', textDecoration: 'none' }}
                  component={Link}
                  to="/viewCourse"
                >
                  <GradingIcon />
                  View Course
                </Typography>
              </Box>
              {/* Search Box */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search..."
                  onChange={handleSearch}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    width: '200px',
                  }}
                />
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
              </Box>
              {/* Login/Register or Logout */}
              {loginStatus ? (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Box>
                  <Button color="inherit" component={Link} to="/register">
                    Register
                  </Button>
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                </Box>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
