import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../GlobalStyles'
import CircularProgress from '../CircularProgress/CircularProgress'
import{ MenuContext } from '../MenuContent/MenuManager/MenuManager'
import './Sidebar.scss'


const Sidebar = () => {
  // const [clickedActive, setClickedActive] = useState(false);

 

  const [dotClass, setDotClass] = useState('dot-animate');  
  const { setOpen, open } = useContext(MenuContext);

  const handleToggle = () => {
    setOpen(!open);
    console.log('menu clicked');
  };

  return (
    <>
     <div className='nav-overlay'></div>
     <div className='nav-container'>
     
     <div className='navbar'>
     
       <button 
       className={`hamburger-wrapper ${open ? 'clicked-button': 'unclicked' }`}
       onClick={handleToggle}>
         <div className='hamburger-icon'>
             <span className='dot-animate first-dot hamburger-dot'></span>
             <span className='dot-animate second-dot hamburger-dot'></span>

             <span className='dot-animate fourth-dot hamburger-dot'></span>
             <span className='dot-animate fifth-dot hamburger-dot'></span>
             <span className='dot-animate sixth-dot hamburger-dot'></span>

             <span className='dot-animate eight-dot hamburger-dot'></span>
             <span className='dot-animate ninth-dot hamburger-dot'></span>
             
         </div>
        
       
       </button>
     
       <div className='circle-progress-bar'>
        <CircularProgress/>
       </div>
       <div className='bottom-logo'>
         {/* <span className="add"></span> */}
         logo
       </div>
     </div>
   </div>
    </>
   
  )
}

export default Sidebar