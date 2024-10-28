import { useState } from "react"
import TodoItem from "./TodoItem"
import Form from "./Form"
import TodoList from "./TodoList"
import style from "./todolist.module.css"
import Footer from "./Footer"

export default function Todo(){
  const [todos , setTodos] = useState([])
  const CompletedTodos = todos.filter((todo)=>todo.done).length
  const TotalTodos = todos.length
  return(
  <div className={style.todo}> 
  <Form todos={todos} setTodos={setTodos} />
  <TodoList setTodos={setTodos} todos={todos} />
  <Footer completedTask={CompletedTodos} TotalTodos={TotalTodos} />
  </div>
  )
}