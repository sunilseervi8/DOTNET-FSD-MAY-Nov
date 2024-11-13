import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
const LoginForm = () => {
  const validateForm = yup.object({
     email:yup.string().required().email(),
     password:yup.string().required().min(6),
  })
 const formikData=useFormik({
   initialValues: {
     email: '',
     password: '',
   },
   validationSchema: validateForm,
   onSubmit: (values) => {
    values.preventDeafult()
    if(formikData.isValid){
      console.log(values);
      toast.success('Login Successful')

    }
    else{
      toast.error('Login Failed')
    }
   },
 })

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={formikData.handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            onChange={formikData.handleChange}
            error={formikData.touched.email && Boolean(formikData.errors.email)}
            helperText={formikData.touched.email && formikData.errors.email}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            // value={loginData.password}
            onChange={formikData.handleChange}
            error={formikData.touched.password && Boolean(formikData.errors.password)}
            helperText={formikData.touched.password && formikData.errors.password}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
