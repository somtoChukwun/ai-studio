import React, { useEffect, useState } from 'react'

const useReadingProgress = () => {
    const [completion, setCompletion] = useState(0);
    
    //useEffect
    useEffect(() => {  
        const updateScrollCompletion = () => {
            const scrollcounter = document.querySelector("#output");

          const currentProgress = window.scrollY;
          const scrollHeight = 
          document.body.scrollHeight - window.innerHeight;

        if(scrollHeight) {
            const percentScroll = 
            Math.round(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            setCompletion(percentScroll);
           }
      }
      window.addEventListener('scroll', updateScrollCompletion);

      return () => {
        window.removeEventListener('scroll', updateScrollCompletion);
      }
    }, []);
    return completion;
}

export default useReadingProgress