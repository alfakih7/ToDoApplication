import { useState } from "react"
import TodoItem from "./TodoItem"
import Form from "./Form"
import TodoList from "./TodoList"
import style from "./todolist.module.css"

export default function Todo(){
  const [todos , setTodos] = useState([])
  return(
  <div className={style.todo}> 
  <Form todos={todos} setTodos={setTodos} />
  <TodoList setTodos={setTodos} todos={todos} />
  </div>
  )
}