import React,{useState} from 'react'

const State = () => {
    let [value,setValue]=useState("👍")
const like=()=>{
    if(value==="👍"){
setValue(()=>value="❤️")
}
else{
    setValue(()=>value="👍")
}
    }
    
  return (
    <div>
        <div className='p-2 m-2 h-10 w-10 flex justify-center bg-black'>
            <button onClick={like}>{value}</button>
        </div>
    </div>
  )
}

export default State