import { useState,useEffect } from 'react'

function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((req)=>{
      return req.json()
    }).then((response)=>{
      console.log(response)
      setData(response)
    })
  },[data])
const Card=({item})=>{
  return(
    <>
    <div className='bg-gray-800 w-1/4 h-1/3 flex flex-col justify-center items-center flex-wrap gap-2 text-white'>
      <div className=' w-2/3 h-2/3 m-10'>
        <img  className ="object-cover"src="https://images.pexels.com/photos/33369336/pexels-photo-33369336.jpeg" alt="" />
      </div>
      <div className='flex  flex-col justify-between items-center gap-2'>
        <div className='bg-green-500 w-auto h-auto p-4 m-4'>
          <h1>{item.email}</h1>
        </div>
         <div className='bg-green-500   w-auto h-auto px-3 py-2 m-4'>
          <h1>{item.id}</h1>
        </div>
         <div className='bg-green-500  w-auto h-auto  p-4 m-4'>
          <h1>{item.name}</h1>
        </div >
         <div className='bg-green-500 w-auto h-auto p-4 m-4'>
          <h1>{item.username}</h1>
        </div>
      </div>
    </div>
    </>
  )
}
  return (
    
  <>
   <div className="flex justify-items-center flex-wrap gap-6 p-6 mx-60">
  {data.map((item, index) => (
   
    <Card key={index} item={item} />
    
  ))}
  </div>
</>    
    
  )
}

export default App
