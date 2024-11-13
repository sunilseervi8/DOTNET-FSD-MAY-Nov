import React from 'react'
import { Container,Box,TextField,Button,Typography } from '@mui/material'
import {  useFormik } from 'formik'
import {validateUser} from "../../service/user.service"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/appContext'

export default function Login  () {
    const navigate=useNavigate()
    const mystatus = React.useContext(UserContext)


 
    const formik=useFormik({
        initialValues:{
           
            email:"",
            password:""
        },
        onSubmit: (values) => {
            validateUser(values ).then((data)=>{
            console.log(data)
            if(data){
                 mystatus.isLoggedIn=true
                navigate("/general")
                
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
                User Login
            </Typography>
        <form  onSubmit={formik.handleSubmit} >
        {/* <TextField
           fullWidth
           varient="outlined"
           label="Full Name"
           name='fname'
           onChange={formik.handleChange}
           value={formik.values.fname}
           >            
           </TextField>  */}
          
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
