import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Outlet } from 'react-router-dom'
import '../GlobalStyles'
import './Layout.scss'
import { MenuContent } from './MenuContent/MenuContent'
import Sidebar from './Sidebar/Sidebar'

const Layout = () => {
  const containerRef = useRef(null);

  return (
    <>
    <div className='App'>
      
      <Sidebar />
      <MenuContent />
   
      <LocomotiveScrollProvider
        options={{smooth: true,}}
        watch={[]}
        containerRef={containerRef}
        >
          <main 
          className='layout' 
          // data-scroll-container 
          ref={containerRef}>
            <Outlet />
          </main> 
      </LocomotiveScrollProvider>
      
    </div>
    </>
    
  )
}

export default Layout;