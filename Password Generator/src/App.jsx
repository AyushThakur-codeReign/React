import React, { useCallback, useState,useEffect, useRef } from "react";
import Login from "./Components/Login";
import List from "./Components/List";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (character) str += "!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
      setPassword(pass);

    }
  }, [numbers, character, length, setPassword]);
  let passRef=useRef(null)

  let copy= useCallback(()=>{
    passRef.current?.select();
   window.navigator.clipboard.writeText(password)
  },[password])
useEffect(()=>{
  passwordGenerator()
},[numbers, character, length, setPassword,passwordGenerator])
  return (
    <>
      <div className="flex justify-center items-center flex-col w-1/2 h-f rounded-4xl mt-10 mb-10 mr-auto ml-auto bg-gray-700">
        <h1 className="text-6xl text-white text-center w-full m-2">
          Password Generator
        </h1>
        <div className="flex justify-center m-8 w-full">
          <input
            type="text"
            className="bg-white rounded-sm p-4 w-2/4 outline-none "
            placeholder="Password"
            value={password}
            readOnly
            ref={passRef}
          />
          <button onClick={copy}className="bg-blue-600 text-white p-4 rounded-md cursor-pointer">
            Copy
          </button>
        </div>
        <div className=" text-orange-400 font-semibold flex justify-center gap-2 mb-10">
          <input type="range" min={6} max={32} value={length} 
          onChange={(e)=>setLength(e.target.value)}/>
          <label>Length:{length}</label>
          <input type="checkbox" name="color" id="check" 
          onChange={(e)=>setNumbers((numbers)=>!numbers)}/>
          <label>Numbers</label>
          <input type="checkbox"
          onChange={(e)=>setCharacter((character)=>!character)}></input>
          <label>Characters</label>
        </div>
        
      </div>
      <List/>
     
    </>
  );
}

export default App;
