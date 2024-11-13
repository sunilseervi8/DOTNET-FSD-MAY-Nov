import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export default function Navbar() {
  const loginStatus = useSelector((state) => state.user.isLoggedIn)
    // defien dispatcher
    const navigate=useNavigate()
    const dispatcher= useDispatch()
    function handleLogout(){
      navigate('/login')
       dispatcher(logout())
      
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:" #00246B"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookStore
          </Typography>

          {
            loginStatus?(
              <Button color='inherit'onClick={handleLogout}>logout</Button>
            ):
              <Box>
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <Button color='inherit' component={Link} to="/login">Login</Button>
              </Box>
            
          } 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
