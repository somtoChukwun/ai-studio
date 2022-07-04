import React, { useContext } from 'react'
import { contactDetailsList } from './MenuOptions/contactDetailsList'
import { menuOptionsLinks } from './MenuOptions/menuOptionsLinks'
import { socialIconsList } from './MenuOptions/socialIconsList'
import './MenuContent.scss'
import '../../GlobalStyles'
import { NavLink } from 'react-router-dom'
import{ MenuContext } from './MenuManager/MenuManager'

export const MenuContent = () => {

  const { setOpen, open } = useContext(MenuContext);

  const handleToggle = () => {
    setOpen(!open);
    console.log('menu clicked');
  };

  return (
    <>
    <div
    className={`menu-container ${open ? 'open-menu': 'closed-menu' }`}>

<div className='menu-overlay'></div>
    <div className='menu-page'>
    
        <div className='menu-top-content'>
            <div className='menu-options'>
            <nav >
                  <ul className='menu-nav-links'>
                    {menuOptionsLinks.map((link) => (
                    <li key={link.url}>
                      <NavLink 
                      exact="true" 
                      activeclassname="active" 
                      className='nav-link'
                      to={link.url}
                      onClick={handleToggle}
                      >
                        {link.component}</NavLink>
                      {link.badge}
                      {/* <img src={link.img} /> */}
                    </li>
                  ))}

                   </ul>
              </nav>
          
            
            </div>
            <div className='menu-contact-details'>
            <div className='menu-contact-list'>
            {contactDetailsList.map((info) => (
              <div key={info.tempid}>
               <span>{info.contactInfo}</span>
               <span>{info.infoOne}</span>
               <span>{info.infoTwo}</span>
               {info.infoThree && <span>{info.infoThree}</span>}
               
              </div>
            ))}

          </div>
            </div>
        </div>
        <div className='menu-bottom-content'>
        <ul className='external-nav-links'>
            {socialIconsList.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
               
              </li>
            ))}

          </ul>
        </div>
    </div>
    
    </div>
    </>
  )
}
