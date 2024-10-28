import styles from "./todolist.module.css";

export default function TodoItem({ item , todos , setTodos}) {
    function HandleDelete(item)
    {
       setTodos( todos.filter((todo)=>
        todo !== item))
    }
    function HandleDone(itemName) {
        setTodos(todos.map((todo)=>
            todo.name === itemName ? {...todo ,done : !todo.done} :todo))
    }
    const spanClassName = item.done ? styles.completed : styles.modify_span;
    return (
        <div className={styles.todoitem}>
            <div className={styles.itemName}>
                <span className={spanClassName}
                 onClick={()=>HandleDone(item.name)}>{item.name}</span>
                </div>
            <span>
                <button onClick={()=>HandleDelete(item)} 
                className={styles.todoButton}>x</button> 
            </span>
        </div>
    );
}
