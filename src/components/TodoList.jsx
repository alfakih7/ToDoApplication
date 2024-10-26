import TodoItem from "./TodoItem"

export default function TodoList({todos}){
    return <div>
        {todos.map((item , index) =>(
      <TodoItem key={index} item={item} />
    ))}
    </div>
}