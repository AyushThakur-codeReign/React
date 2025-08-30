import React from 'react'
import {  NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='flex bg-gray-700 text-white gap-4 list-none h-14'>
            <NavLink className= {(e)=>{
               return e.isActive?"bg-red-800 ":""
            }} to="/"><li className='p-4'>Home</li></NavLink>
            <NavLink className={(e)=>{
               return e.isActive?"bg-red-800":""
            }} to="/about"><li className='p-4'>About </li></NavLink>
            <NavLink className={(e)=>{
               return e.isActive?"bg-red-800":""
            }} to="/login"><li className='p-4'>login</li></NavLink>
       </nav>
    </div>
  )
}

export default Navbar