import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import myRoutes from './myRoutes'
import {  RouterProvider } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <RouterProvider router={myRoutes} >

      </RouterProvider>


    </>
  )
}

export default App
