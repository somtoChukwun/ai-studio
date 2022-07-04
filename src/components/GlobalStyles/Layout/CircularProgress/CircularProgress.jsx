import React, { useEffect, useState } from 'react'
import './CircularProgress.scss'
import useReadingProgress from './ProgressWatch';


function CircularProgress() {
  const [offset, setOffset] = useState(0);
  const completion = useReadingProgress();
  
  
  const cord = 50;
  const size = cord * 2;
  const radius = cord / 2 - 4 / 2;
  const circum = 2 * Math.PI * radius;
  
 useEffect(() => {
   const progressOffset = ((100 - completion) / 100) * circum;
   setOffset(progressOffset);
   console.log(completion);
 }, [setOffset, offset, completion, circum]);
        

    
  return (
    <> 
      
    <svg 
      id="svg" 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      version="1.1"
xmlns="http://www.w3.org/2000/svg">
  <circle 
    r={radius} 
    cx={cord} 
    cy={cord} 
    fill="transparent" 
    strokeDasharray={circum} 
    strokeDashoffset="0"></circle>
      
  <circle 
    id="bar" 
    r={radius} 
    cx={cord} 
    cy={cord}
    fill="transparent"  
    strokeDasharray={circum}
    strokeDashoffset={offset}></circle>
      <text
        id='output'
        className='percent-display'
        x={cord}
        y={cord}>
        {completion}%
      </text>
      </svg>
      {/*<h2>{offset}: {circum}</h2>*/}
      </>
  )
}

export default CircularProgress