import React,{useState} from 'react'

const List = () => {
    const [check,setCheck]=useState(false);
    const todo=["Learn React","Make a Project","Master JSX"]
  return (
    <div className='text-3xl text-black'>
         {check?(<h1>completed</h1>):<h1>not completed</h1>}
        
          <ul> {todo.map((task,index)=>(
           
            <li key={index}><input type="checkbox" onChange={()=>{
              setCheck((prev)=>!prev)
            }}/>{
                check?"completed":(task)} </li>
                
         
        ))}   </ul>
</div>
  )
}

export default List