import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'



function Layout() {
  return (
    <div className='w-full h-screen'>
        <div className='w-full border-blackV border-b-2 '>
         <NavBar/>
        </div>
        <div className='bg-red-600  h-4/5 my-4 mx-4'>children</div>
        <div className='w-full h-auto border-blackV border-t-2 '>
        <Footer/>
        </div>

    </div>
    

  )
}

export default Layout