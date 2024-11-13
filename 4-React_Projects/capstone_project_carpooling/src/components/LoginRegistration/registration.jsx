import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

const RegistrationForm = () => {
  
  // passing data to the json server
  const userRegisration = async(data) => {
  const url='http://localhost:4000/users'
      // data.preventDefault
     const  response= fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
     await response.then((res) => res.json())
    .then((data) => {
      toast.error('Registration Failed',{
        autoClose: 3000
      })
      console.log(data)
      
    })
    .catch((err) => toast.error(err.message))

  }
  // method defineing the validation of the registration form
  const validateForm = yup.object({
    fullName:yup.string().required().min(3).max(20),
    email:yup.string().required().email(), 
    password:yup.string().required().min(6),
    confirmPassword:yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),

  })


// formic method for the initialzaxtion
 const registeFormik  = useFormik({
   initialValues: {
     fullName: '',
     email: '',
     password: '',
     confirmPassword: ''
   },
   validationSchema: validateForm,
   onSubmit: (values) => {

    if(registeFormik.isValid){
      // console.log(values);
      userRegisration(values)
    }
   },

 })
  const Registration=() => {
      // submit button
      // console.log("submit");
      
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Registration Form
        </Typography>
        <form onSubmit={ registeFormik.handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            id='fullName'
            name="fullName"
            margin="normal"
            error={Boolean(registeFormik.errors.fullName) && registeFormik.touched.fullName}
            helperText={registeFormik.touched.fullName && registeFormik.errors.fullName ? registeFormik.errors.fullName : null}
            // value={Formik.values.fullName}
            onChange={registeFormik.handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            id='email'
            name="email"
            type="email"
            margin="normal"
            // value={Formik.values.email}
            error={registeFormik.touched.email && Boolean(registeFormik.errors.fullName)}
            helperText={registeFormik.touched.email && Boolean(registeFormik.errors.fullName)? registeFormik.errors.fullName : null}
            onChange={registeFormik.handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            id='password'
            type="password"
            margin="normal"
            error={registeFormik.touched.password && Boolean(registeFormik.errors.fullName)}
            helperText={registeFormik.touched.password && Boolean(registeFormik.errors.fullName)? registeFormik.errors.fullName : null}
            // value={Formik.values.password}
            onChange={registeFormik.handleChange} 
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            id='confirmPassword'
            type="password"
            margin="normal"
            error={registeFormik.touched.confirmPassword && Boolean(registeFormik.errors.fullName)}
            helperText={registeFormik.touched.confirmPassword && Boolean(registeFormik.errors.fullName)? registeFormik.errors.fullName : null}
            // value={Formik.values.confirmPassword}
            onChange={registeFormik.handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // onClick={Registration}
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
          <Typography>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Box>
      <Toaster/>
    </Container>
    
  );
};

export default RegistrationForm;
