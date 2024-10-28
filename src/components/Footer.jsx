import style from "./footer.module.css";

export default function Footer({ completedTask , TotalTodos }) {
    return <div className={style.footer}>
        <span>Completed Tasks : {completedTask}</span>
        <span>Total Todos : {TotalTodos}</span>
        </div>;
}
