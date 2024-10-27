import TodoItem from "./TodoItem"
import style from "./todolist.module.css"

export default function TodoList({todos , setTodos}){
  if (todos.length === 0) return null;
    return <div className={style.list}>
        {todos.map((item , index) =>(
      <TodoItem setTodos={setTodos} todos={todos} key={item} item={item} />
    ))}
    </div>
}