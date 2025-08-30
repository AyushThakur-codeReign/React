import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const[Todo,setTodo]=useState("")
  const[Todos,setTodos]=useState([])
  const[finished,SetFinished]=useState(true)
  const [color,setColor]=useState(false)
  useEffect(()=>{
   if(color){
    document.body.classList.add("dark")
   }
   else{
    document.body.classList.remove("dark")
   }
  },[color])
  useEffect(()=>{
    let todo = localStorage.getItem("todos")
    if(todo){
    let todos= JSON.parse(localStorage.getItem("todos"))
   setTodos(todos)
    }
  },[])
  const handleFinished=(e)=>{
    SetFinished(!finished)
  }
  const handleAdd=()=>{
   setTodos([...Todos,{id:uuidv4(),Todo,iscompleted:false}])
   setTodo("")
  }
    const handleEdit=(e,id)=>{
    let t= Todos.filter(i=>{
      return i.id===id;
    })
    setTodo(t[0].Todo)
     let newTodos=Todos.filter(item=>{
        return item.id!==id
      })
      setTodos(newTodos)
      save()
  }
    const handleDelete=(e,id)=>{
      let newTodos=Todos.filter(item=>{
        return item.id!==id
      })
      setTodos(newTodos)
      save()
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleCheckbox=(e)=>{
    let id=e.target.name
    let index =Todos.findIndex(item=>{
      return item.id===id;

  })
    let newTodos =[...Todos];
    newTodos[index].iscompleted=!newTodos[index].iscompleted;
    setTodos(newTodos)
  save()

  }
  const save=()=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
  }
  return (
    <>
    <Navbar color={color} setColor={setColor}/>
    <div className='md:container bg-violet-100 md:mx-auto  md:w-1/2 my-5 p-5 rounded-xl min-w-[80vh]'>
    <h1 className=' font-bold text-center text-3xl'>Welcome Manage your tasks Here!</h1>
      <div className='addTodo my-5'>
        <h2 className='font-bold'>Add Todo</h2>
        <div className='flex gap-2'>
        <input onChange={handleChange} value ={Todo}type="text" className='bg-white w-1/2 '/>
        <button onClick={handleAdd}className='bg-violet-600 hover:bg-violet-800 text-white text-lg rounded-md p-2 font-bold' disabled={Todo.length<=3}>Add</button>
        </div>
      </div>
      <div><input onChange={handleFinished} type="checkbox" checked={finished}/>Show Finished</div>
      
      <h1 className='font-bold'>Your Todos</h1>
      <div className='todos'>
       
        {Todos.length===0 && <div className='mx-3 my-4 font-semibold'>No todos to display</div>}
        {Todos.map((items)=>(
          ((finished || !items.iscompleted) &&
            <div key ={items.id}className='todo flex md:w-1/2 my-3  justify-between'>
<div className='flex gap-5 w-3/4 h-full break-words ' >

<input name={items.id} type="checkbox" checked={items.iscompleted} onChange={handleCheckbox}/>
          <div className={`${items.iscompleted?"line-through":""} break-words`} >{items.Todo}</div>
          </div>
          <div className='buttons flex h-full'>
            <button onClick={(e)=>{
             handleEdit(e,items.id)
            }}className="mx-2 bg-violet-600 text-white p-2 rounded-md hover:bg-violet-800">Edit</button>
            <button onClick={(e)=>{
              handleDelete(e,items.id)
            }}className="mx-2 bg-violet-600 text-white p-2 rounded-md hover:bg-violet-800" >Delete</button>
          </div>
        </div>
      
)))}
      </div>
      </div>
    </>
  )
}
export default App
