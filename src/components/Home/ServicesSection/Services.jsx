import React from 'react'
import { BatteryCharging, Box, Package, Paperclip } from 'react-feather'
import './Services.scss'
import GradientFill from '../../GlobalStyles/GradientFill'

export default function Services() {
  return (
    <>
    <div className="services-container">
 
        <div className="first-section rows">
          <div className="row-one row">
            <h2>
              Our <br/> 
              Solutions</h2>
          </div>
          <div className="row-two row">
            <div className="bioinform">
              <BatteryCharging 
              stroke="url(#RepeatedGradient)"/>
              <h5>Bioinformatics</h5>
              <p>Duis sint ex nulla deserunt mollit proident irure nisi proident anim Lorem.</p>
            </div>
          </div>
        </div>
        <div className="second-section rows">
          <div className="row-one row">
          <div className="biome">
              <Paperclip 
              stroke="url(#RepeatedGradient)"/>
              <h5>Biome Science</h5>
              <p>Nostrud aliqua tempor laborum sit eiusmod pariatur esse aute id consequat sint.</p>
            </div>
          </div>
          <div className="row-two row">
          <div className="biopharm">
              <Box 
              stroke="url(#RepeatedGradient)"/>
              <h5>Biopharma</h5>
              <p>Commodo ipsum anim aute reprehenderit fugiat sunt duis officia.</p>
            </div>
          </div>
        </div>
    </div>
    <svg width="10" height="10" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="RepeatedGradient" cx="0.9" cy="0.1" r="0.85" fx="0.75" fy="0.75"
                >
            <stop offset="0%" stop-color="rgba(255,0,0,.8)"/>
            <stop offset="100%" stop-color="rgba(5, 95, 5, 0.8)"/>
        </radialGradient>
    </defs>
    </svg>
    </>
  )
}
