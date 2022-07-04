import React from 'react'
import './Hero.scss'
import { Play, Plus } from 'react-feather';

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="top-bar rows">
          <div className="row-one row"></div>
          <div className="row-two row">
            <div className="privacy-box">
              <div className="wide">Our Privacy Policy</div>
              <div className="small">EN</div>
            </div>
          </div>
        </div>
        <div className="center-section rows">
          <div className="row-one row">
          <div className="pulse-wrap">
            <div className="pulse-ripple">
            <Play className='ripple-play'/>
            <span className="ripple-wrapper">
              <span className="ripple"></span>
              <span className="ripple"></span>
              <span className="ripple"></span>
              </span>
            </div>
              </div>
          </div>
          <div className="row-two row">
            <h1>
            Deciphering Life's Code!
            </h1>
          </div>
        </div>
        <div className="bottom-section rows">
          <div className="row-one row">
            <p>
              Sunt sunt Lorem ullamco magna. Minim in dolor esse in in nisi officia proident eiusmod fugiat. Esse sit voluptate nulla laborum veniam aliquip nostrud magna in qui exercitation qui incididunt commodo. 
            </p>
          </div>
          <div className="row-two row">
            <img 
            src='https://i.imgur.com/2W7rywd.png' 
            alt='Wikipedia'/>
            <div className="plus-button">
                  <Plus className='plus-button'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero