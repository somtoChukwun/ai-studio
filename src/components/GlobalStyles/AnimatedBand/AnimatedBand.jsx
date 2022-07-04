import React, { useState } from 'react'
import '../../GlobalStyles/GlobalStyles'
import './AnimatedBand.scss'

const AnimatedBand = ({dotClass}) => {
  return (
            <span 
                className={`${dotClass} `}>
            </span>
            )
        }

// const AnimatedBand = ({letterClass, strArray, idx}) => {
//     return (
//       <span>
    
//           {
//               strArray.map((char, i) => (
//                   <span key={char + 1} 
//                   className={`${letterClass} _${i + idx}`}>
//                       {char}
//                   </span>
//               ))
//           }
//               {/* <span>
//           {
//               strArray.map((char, i) => (
//                   <span key={char + 1} 
//                   className={`${letterClass} _${i + idx}`}>
//                       {char}
//                   </span>
//               ))
//           }
//       </span> */}
      
//       </span>
//     )
//   }
  

export default AnimatedBand