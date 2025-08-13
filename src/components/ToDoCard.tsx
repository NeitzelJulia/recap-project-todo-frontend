import styles from "./ToDo.module.css";
import type {ToDo} from "../types/ToDo.ts";

type ToDoProps = {
    todo: ToDo;
}

export default function ToDoCard({todo}: ToDoProps) {
    return (
        <li className={styles.card}>
            {todo.description}
        </li>
    )
}