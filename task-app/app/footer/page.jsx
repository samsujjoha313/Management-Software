"use client"
import React,{ createContext } from 'react'
const context = createContext();
const Footer = ({children}) => {
    
  return (
    <div>
        <context.Provider value={'samsujjoha'}>
            {children}
        </context.Provider>
        
      
    </div>
  )
}

export default Footer;
export {context}
