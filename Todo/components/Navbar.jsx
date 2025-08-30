

const Navbar = ({color,setColor}) => {
 
 
  return (
    <div className='flex justify-between items-center min-w-[screen] py-4 bg-slate-700 '>
        <h2 className='font-bold text-2xl mx-3 text-white'>
            Todo
        </h2>
        <ul className='flex justify-center items-center gap-3 text-white'>
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>About us</li>
            <li className='cursor-pointer hover:font-bold'> Services</li>
        </ul>
        <button onClick={()=>{
          setColor(!color)}}className='bg-violet-700 p-3 rounded-md mx-3 text-white hover:cursor-pointer'>{color?"Light Mode":"Dark Mode "}</button>
    </div>
  )
}

export default Navbar