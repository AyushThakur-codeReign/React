import React,{useState} from "react"
import Card from "./Components/Card"
function App() {
let [counter,setCounter]=useState(0)
const addvalue=()=>{
  setCounter(counter+1)
}
const subvalue=()=>{
  if(counter>0){
  setCounter(counter-1)
}
else {
  setCounter(counter=0)
}
}
const user={
  btn:"login",
  btn2:"Sign Up"
}
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter: {counter}</h2>
    <button onClick={addvalue}>+</button>
    <button onClick={subvalue}>-</button> 
    <p >{counter}</p>
    <Card value="Ayush"  btntext={user.btn}/>
    <Card value="card"  btntext={user.btn2}/>
    </>
    
  )  
}
export default App
