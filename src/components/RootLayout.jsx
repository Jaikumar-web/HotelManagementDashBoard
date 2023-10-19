import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import RightSide from './RightSide/RightSide';
const RootLayout = () => {
  return (
    <div className='AppGlass'>
    <Sidebar />
    <main>
    <Outlet />
    </main>
    <RightSide />
    </div>
  )
}

export default RootLayout;
