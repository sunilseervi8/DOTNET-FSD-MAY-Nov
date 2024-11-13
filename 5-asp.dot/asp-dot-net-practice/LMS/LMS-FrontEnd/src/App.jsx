import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router'
import Register from './Components/Forms/Register'
import Navbar from './Components/Navigation/Header'
import Login from './Components/Forms/Login'
import Dashboard from './Components/Dashboard/dashboard'
import Sidebar from './Components/Navigation/Sidebar'
import AddCourse from './Components/Dashboard/AddCourse'
import ViewCourse from './Components/Dashboard/viewCourse'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const loginStatus = useSelector((state) => state.user.isLoggedIn)
  return (
    <>
      <Navbar />
      <Outlet />
      {/* </> */}
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addCourse' element={loginStatus ? <AddCourse /> : <Navigate to="/login" />}></Route>
        <Route path='/viewCourse' element={loginStatus ? <ViewCourse /> : <Navigate to="/login" />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/addCourse' element={<AddCourse />}></Route>
          <Route path='/dashboard/viewCourse' element={<ViewCourse />}></Route>
        </Route>


      </Routes>
    </>
  )
}

export default App
