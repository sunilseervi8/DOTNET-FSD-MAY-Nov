import React from 'react'
import { Container,Box,TextField,Button,Typography } from '@mui/material'
import { Formik, useFormik } from 'formik'
import {addUser} from "../../service/user.service"
import { useNavigate } from 'react-router-dom'

export default function Registration  () {
    const Navigate=useNavigate()
 
    const formik=useFormik({
        initialValues:{
            fname:"",
            email:"",
            password:""
        },
        onSubmit: (values) => {
         addUser(values ).then((data)=>{
            console.log(data)
            if(data){
                Navigate("/login")
            }
         }).catch((err)=>{
            console.log(err)
         })

            console.log(values)
        }
    })
  return (
    <div>
       <Container  maxWidth="sm" sx={{backgroundColor:"#CADCFC" ,widht:"100%" ,height:"100%"}}>
        <Box sx={{mt:"6rem", borderRadius:"10px"}}>
            <Typography sx={{textAlign:"center", fontSize:"40px" ,mt:"1rem" ,p:"2rem" }}>
                Registration
            </Typography>
        <form  onSubmit={formik.handleSubmit} >
        <TextField
           fullWidth
           varient="outlined"
           label="Full Name"
           name='fname'
           onChange={formik.handleChange}
           value={formik.values.fname}
           >            
           </TextField> 
          
           <TextField
           fullWidth
           sx={{mt:"2rem"}}
           varient="outlined"
           label="Email"
           name='email'
           onChange={formik.handleChange}
           value={formik.values.email}
           >            
           </TextField>
           <TextField
           fullWidth
           sx={{mt:"2rem"}}
           varient="outlined"
           label="Password  "
           name='password'
           onChange={formik.handleChange}
           value={formik.values.password}
           >            
           </TextField>
          <Button
          fullWidth
          variant="contained"
          sx={{mt:"1rem", p:"0.8rem", mb:"2rem"}}
          type='submit'
          >
            Submit
          </Button>
        </form>
           
        </Box>
       </Container>
    </div>
  )
}
