import { useState ,useEffect} from 'react'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import { Route, Routes } from 'react-router'
import Register from './Components/Register.jsx'
import axios from 'axios'
import Card from './Components/Card.jsx'
import Sidebar from './Components/sidebar.jsx'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/:category" element={<Card></Card>} ></Route>
        <Route path="/" element={<Card  />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      
    </>
  ) 
}

export default App
