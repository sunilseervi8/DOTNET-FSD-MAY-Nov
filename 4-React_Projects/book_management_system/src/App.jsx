import { useState } from 'react'
import './App.css'
import { Routes,Route, Outlet } from 'react-router'
import Register from './Components/Forms/Register'
import Navbar from './Components/Navigation/Header'
import Login from './Components/Forms/Login'
import viewBooks from './Components/UserDashboard/viewBooks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/viewBooks' element={<viewBooks/>}></Route>
k
      </Routes>
    </>
  )
}

export default App
