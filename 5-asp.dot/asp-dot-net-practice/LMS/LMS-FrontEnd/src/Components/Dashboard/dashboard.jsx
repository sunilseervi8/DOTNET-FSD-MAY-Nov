import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Navigation/Sidebar'
import { Padding } from '@mui/icons-material'
import { Box } from '@mui/material'
export default function Dashboard() {
  return (
    <Box sx={{ marginTop: '60px', display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ display: {marginTop: '60px', xs: 'none', sm: 'none', md: 'block' } }}>
        <Sidebar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
