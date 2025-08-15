import { useState } from 'react'
import ProfileCard from './Components/ProfileCard'
function App() {
  const [color, setColor] = useState("white")
  const teamMembers = [
  {
    name: "Ayush Thakur",
    role: "React Developer",
    image: "https://images.pexels.com/photos/33348507/pexels-photo-33348507.jpeg"
  },
  {
    name: "John Doe",
    role: "UI Designer",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    name: "Jane Smith",
    role: "Backend Engineer",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
  }
];

  return (
    <>
    <div className='W-full h-screen duration 200' style={{backgroundColor:color}}>
     <div className='flex flex-wrap justify-center'>
    {teamMembers.map((member,index)=>(
      <ProfileCard
      key={index}
      name={member.name}
      role={member.role}
      image={member.image}
      />
    ))}
    </div>
      
        <div className='fixed w-full flex flex-wrap  bg-black gap-3 justify-center rounded-4xl bottom-12' >
          <div className="p-4 m-4">
            <button onClick={()=>{
              setColor((color)=>color="red")
            }}className='p-4 m-4 bg-red-100 rounded-xl'>Red</button>
             <button onClick={()=>{
              setColor((color)=>
                color="yellow"
              )
             }}className='p-4 m-4 bg-red-100 rounded-xl'>yellow</button>
              <button onClick={()=>{
              setColor((color)=>
                color="blue"
              )
             }}className='p-4 m-4 bg-red-100 rounded-xl'>Blue</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
