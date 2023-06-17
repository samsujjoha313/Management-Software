"use client"
import React,{useContext} from 'react'
import context from '../footer/page'

const Navbar = ({name}) => {
    const  a = useContext(context)
  return (
    <>
    <h1 >Navbar oppage {a}</h1>
      
    </>
  )
}

export default Navbar
