import React from 'react'
import {  NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='flex bg-gray-700 text-white gap-3 list-none '>
            <NavLink className={(e)=>{
               return e.isActive?"bg-red-800 ":""
            }} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{
               return e.isActive?"bg-red-800":""
            }} to="/about"><li>About </li></NavLink>
            <NavLink className={(e)=>{
               return e.isActive?"bg-red-800":""
            }} to="/login"><li>login</li></NavLink>
       </nav>
    </div>
  )
}

export default Navbar