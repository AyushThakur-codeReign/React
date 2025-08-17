
import React,{useCallback, useState} from "react"


function App() {
const[length,setLength]=useState(8)
const[numbers,setNumbers]=useState(false)
const[character,setCharacter]=useState(false)
const[password,setPassword]=useState("")
const passwordGenerator=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numbers)str+="0123456789"
if(character)str+="!@#$%^&*()"
for(i=1;i<length;i++){
  let char=Math.random()*str.length +1
  pass+=str.charAt(char)
  setPassword(pass)
}
},[numbers,character,length,])


  return (
    <>
    <div className="flex  justify-center items-center flex-col">
      <h1 className="bg-black text-6xl text-white text-center  m-5">PassWord Generator</h1>



    
    </div>
    </>
  )
}

export default App
