import React from 'react';
import { Container, Box, Avatar, Typography, Button, Grid, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

const user = {
  name: 'Sunil Seervi',
  email: 'sunilseervi@outlook.in',
  avatar: '',
};

function UserProfile() {
  return (
    <Container   maxWidth="lf" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 10 }}>
        {/* User Avatar and Info */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {user.email}
          </Typography>
        </Box>

        {/* Buttons to Edit Profile or Logout */}
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<EditIcon />}  
                sx={{ backgroundColor: '#37475A', '&:hover': { backgroundColor: '#232F3E' } }}
              >
                Edit 
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<LogoutIcon />}
                sx={{ color: '#37475A', borderColor: '#37475A', '&:hover': { borderColor: '#232F3E' } }}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default UserProfile;
