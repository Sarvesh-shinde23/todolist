import { useState, useEffect } from "react"

import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
    
  const[todos,setTodos] =useState([
    'we go gym',
    'we code',
    'we study',
    'work on skills'
  ])
  function handleAddTodos(newTodo){
    const newTodoList =[...todos,newTodo]
    setTodos(newTodoList)
  }


  return (
    <>
     <TodoInput handleAddTodos={handleAddTodos}/>

     <TodoList todos={todos}/>
    </>
  )
}

export default App
