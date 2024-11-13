import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; // This will represent '>>'
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  function handleaddCourse(){
      // Navigate('/addCourse')
    console.log("Add Course")
  }

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      open={open}
      sx={{
        marginRight:'120px',
        marginTop: '60px', // Add margin top here
        width: open ? 150 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          marginTop: '60px', // Add margin top here as well
          marginRight:'160px',
          width: open ? 150 : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: 'black',
        },
      }}
    >
      {/* Main content area with the menu icons */}
      <Box sx={{}}>
        <List>
          {/* Add */}
          <ListItem button onClick={handleaddCourse} component={Link} to="/dashboard/addCourse">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            {open && <ListItemText primary='Add' />}
          </ListItem>

          {/* Delete */}
          <ListItem button>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            {open && <ListItemText primary='Delete' />}
          </ListItem>

          {/* Update */}
          <ListItem button>
            <ListItemIcon>
              <UpdateIcon />
            </ListItemIcon>
            {open && <ListItemText primary='Update' />}
          </ListItem>

          {/* View */}
          <ListItem button component={Link} to="/dashboard/viewCourse">
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            {open && <ListItemText primary='View'  />}
          </ListItem>
        </List>
        <Box sx={{ padding: 2, color: 'white' }}>
        <IconButton
          onClick={toggleDrawer}
          sx={{ marginLeft: open ? 'auto' : 'inherit' }}
        >
          {open ? <KeyboardDoubleArrowLeftIcon  /> : <KeyboardDoubleArrowRightIcon />}
        </IconButton>
      </Box>
      </Box>

      {/* Button to toggle collapse/expand at the bottom */}
     
    </Drawer>
  );
};

export default Sidebar;
