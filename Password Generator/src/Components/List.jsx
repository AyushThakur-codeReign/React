import React,{useState} from 'react'

const List = () => {
    const [check,setCheck]=useState(false);
    if(check){
        setCheck(!check)
    }


    const todo=["Learn React","Make a Project","Master JSX"]
  return (
    <div className='text-3xl text-black'>
         {check?(<h1>completed</h1>):<h1>not completed</h1>}
         <input type="checkbox" checked={check} ></input>
          <ul> {todo.map((task,index)=>(
           
            <li key={index}>{
                !check?(task):("completed")}</li>
         
        ))}   </ul>
</div>
  )
}

export default List