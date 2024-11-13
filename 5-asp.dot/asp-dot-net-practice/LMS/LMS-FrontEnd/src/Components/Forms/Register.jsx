import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { addUser } from '../../Store/slicer/userThunk';

export default function Register() {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const loadingStatus = useSelector((state) => state.user.isRegistered);



  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      password: "",
    
     
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password should be at least 6 characters')
        .required('Password is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
     
    }),
    onSubmit: (values) => {
      const { fname, email, password } = values; 
      console.log(values)
      dispatcher(addUser(values)); 
      console.log(loadingStatus);
      if (loadingStatus) {
          alert("User Added Successfully")
          navigate("/login");
      }
    },
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 5, boxShadow: '5px 5px 5px #CADCFC', marginBottom: "50px" }}>
      <Box alignItems={"center"}>
        <Typography sx={{ textAlign: "center", fontSize: "30px", py: 4 }}>Register</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="fname"
            name="fname"
            label="Full Name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.fname}
            error={formik.touched.fname && Boolean(formik.errors.fname)}
            helperText={formik.touched.fname && formik.errors.fname}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            id="email"
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            sx={{ mb: 2 }}
          />
          
          <Button
            variant="contained"
            fullWidth
            type="submit"
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}
