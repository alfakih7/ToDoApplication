import TodoItem from "./TodoItem"
import style from "./todolist.module.css"

export default function TodoList({todos , setTodos}){
  const sortedTodos = todos.slice().sort((a ,b)=>Number(a.done)-Number(b.done))
  if (todos.length === 0) return null;
    return <div className={style.list}>
        {sortedTodos.map((item , index) =>(
      <TodoItem setTodos={setTodos} todos={todos} key={item.name} item={item} />
    ))}
    </div>
}