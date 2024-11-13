import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GradingIcon from '@mui/icons-material/Grading';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import { logout } from '../../Store/slicer/userSlicer';


export default function Navbar() {
  const loginStatus = useSelector((state) => state.user.isLoggedIn)
    // defien dispatcher
    const navigate=useNavigate()
    const dispatcher= useDispatch()
    function handleLogout(){
     
       dispatcher(logout())
       navigate('/login')
    }
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '60px' }}>
      <AppBar position="static" sx={{backgroundColor:" #00246B"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <HomeIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LMS
          </Typography>
          <Box sx={{ flexGrow: 1,  display:"flex ", gap:"20px"}} > 
          <Typography variant="h6"  sx={{  color:"white", textDecoration: 'none' }} component={Link} to="/addCourse">
            <AddBoxIcon/>
            Add Course
          </Typography>
          <Typography variant="h6"sx={{ flexGrow: 1, color:"white", textDecoration: 'none' }} component={Link} to="/viewCourse" >
            <GradingIcon/>
            View Course
          </Typography>
          </Box>


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
