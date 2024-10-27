import { useState } from "react"
import styles from "./form.module.css"


export default function Form ({todos , setTodos}){
    const [todo , setTodo] = useState("")
  
    function handleSubmit(e)
    {
      e.preventDefault()
      if (todo.trim() === "" || todos.includes(todo.trim())) {
        return; // Do nothing if it's empty or a duplicate
    } 
     
      setTodos([...todos,todo])
      setTodo("")
    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
          <input className={styles.modernInput}
       onChange={(e)=>setTodo(e.target.value)}
        value={todo}
         type="text"
         placeholder="Enter a task.."
          />
      <button className={styles.modernButon} type="submit">Add</button>
          </div>
    </form>
)
}