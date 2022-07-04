import React from 'react'

export default function GradientFill() {
  return (
    <>
    <svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="RepeatedGradient" cx="0.9" cy="0.1" r="0.85" fx="0.75" fy="0.75"
                spreadMethod="pad">
            <stop offset="0%" stop-color="rgba(255,0,0,.8)"/>
            <stop offset="100%" stop-color="rgba(5, 95, 5, 0.8)"/>
        </radialGradient>
    </defs>
    </svg>
    </>
  )
}
