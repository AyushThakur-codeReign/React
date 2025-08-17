import React,{useState}from 'react'
const Login = () => {
    const [login,setLogin]= useState(false);
  return (
    <div className='flex flex-col justify-center items-center bg-gray-500 w-2xl h-2xl'>
    <div classname="bg-gray-700 text-white w-auto h-auto m-4"  >{ login?( <h1>Please Login To your account</h1>):
       (<h1>Welcome back</h1>) }
    <button onClick={()=>setLogin(!login)}
   className='bg-green-400 p-4 m-4 text-xl rounded-md' > {login ?"Login":"logout"}</button>
    </div>
    </div>
  )
}
export default Login