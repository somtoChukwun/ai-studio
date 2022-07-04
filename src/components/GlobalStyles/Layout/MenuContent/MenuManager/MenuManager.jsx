import React, { createContext, useState } from 'react'


export const MenuContext = createContext({
    open: false,
    setOpen: () => {}
  });

export default function MenuManager ({children}){
    const [open, setOpen] = useState(false);

    return(
       
        <MenuContext.Provider value={{open, setOpen}}>
            {children}
        </MenuContext.Provider>
      
    );

}