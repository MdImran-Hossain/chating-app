import React from 'react'
import Navbar from '../page/HomePage/Navbar'
import { Outlet } from 'react-router'
const RootLayout = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <Navbar />
        <div className=' w-full h-[922px] m-6 rounded-2xl  py-[20px'> 
            <Outlet />
        </div>
      </div>
    </>
  )
}

export default RootLayout
