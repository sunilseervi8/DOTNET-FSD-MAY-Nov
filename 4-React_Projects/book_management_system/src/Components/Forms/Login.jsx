import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { validateUser } from '../../Store/slicer/userThunk';
const Login = () => {

  const naviagator = useNavigate();

  // import the dispatcher
  const dispatcher = useDispatch()
  const loginStatus = useSelector((state) => state.user.isLoggedIn)

  const mystatus = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password should be at least 6 characters')
        .required('Password is required')
    }),
    onSubmit(value) {
      console.log(value);
      if (mystatus.isValid) {
        dispatcher(validateUser(value))
        alert("Login Successfull");
        naviagator("/viewBooks")
      }
    }
  });
  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: 5, boxShadow: '5px 5px 5px #dfdfdf' }}>
        <Box alignItems={"center"}>
          <Typography sx={{ textAlign: "center", fontSize: "30px", py: 4 }}>Login</Typography>
          <form onSubmit={mystatus.handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              id="email"
              variant="outlined"
              onChange={mystatus.handleChange}
              error={mystatus.touched.email && Boolean(mystatus.errors.email)}
              helperText={mystatus.touched.email && mystatus.errors.email}
              value={mystatus.values.email}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="outlined"
              onChange={mystatus.handleChange}
              value={mystatus.values.password}
              error={mystatus.touched.password && Boolean(mystatus.errors.password)}
              helperText={mystatus.touched.password && mystatus.errors.password}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              type='submit'
              sx={{ mt: 3, mb: 2, py: 1, backgroundColor: ' #00246B' }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};
export default Login