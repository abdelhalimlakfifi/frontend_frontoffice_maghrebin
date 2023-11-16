import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'



const iconLinks = [
    { path: '#', icon: '/src/assets/Icons/HomeIcon.svg', alt:'HomeIcon' },
    { path: '#', icon: '/src/assets/Icons/favIcon.svg', alt: 'favIcon' },
    { path: '#', icon: '/src/assets/Icons/cartIcon.svg', alt:'cartIcon' },
    { path: '#', icon: '/src/assets/Icons/userIcon.svg', alt: 'userIcon' },
  ]

function Layout({children}) {
    
  return (
    <div className='w-full h-screen'>
        <div className='w-full border-blackV border-b-2 fixed bg-white'>
         <NavBar />
        </div>
        
        {/* lhofra */}
        <div className='lg:hidden' >

        </div>

        {/* call all child components */}
        <div className=''>{children}</div>

        <div className='w-full h-auto   border-blackV border-t-2 '>
        <Footer/>
        </div>

        {/* bottom navMenu */}
        <div className="flex justify-between items-center  lg:hidden h-12 px-4 md:px-7 md:h-11 fixed bottom-0 left-0 w-full bg-white  border-blackV border-t-2  ">
        {iconLinks.map((iconLink, index) => (
          <Link key={index} to={iconLink.path} className="w-8">
            <img src={iconLink.icon} alt={iconLink.alt} className="h-6 md:h-7 m-0 p-0" />
          </Link>
        ))}
        </div>

    </div>
    

  )
}

export default Layout