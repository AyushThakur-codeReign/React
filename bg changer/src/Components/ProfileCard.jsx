import React from 'react'
import State from './State'
function ProfileCard({name,role,image}) {
  return (
    <div>
      <div className='m-7 flex flex-col w-100 h-100 bg-gray-600 gap-2 justify-center items-center text-white rounded-md' >
            <img src={image} className='rounded-md w-60 h-60  '></img>
        <h2 className='text-center'>{name}</h2>
        <p>Hello My Name is {name}.I am {role} </p>
         <State/>
      </div>
     
    </div>
  )
}

export default ProfileCard
