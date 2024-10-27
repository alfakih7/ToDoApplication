import styles from "./todolist.module.css";

export default function TodoItem({ item , todos , setTodos}) {
    function HandleDelete(item)
    {
       setTodos( todos.filter((todo)=>
        todo !== item))
    }
    return (
        <div className={styles.todoitem}>
            <div className={styles.itemName}>{item}</div>
            <span>
                <button onClick={()=>HandleDelete(item)} className={styles.todoButton}>x</button> {/* Apply button class if needed */}
            </span>
        </div>
    );
}
