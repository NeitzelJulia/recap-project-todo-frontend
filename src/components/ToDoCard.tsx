import styles from "./ToDo.module.css";
import type {ToDo} from "../types/ToDo.ts";

type ToDoProps = {
    todo: ToDo;
}

export default function ToDoCard({todo}: ToDoProps) {
    console.log(todo)
    return (
        <li className={styles.card}>
            Beispiel-Aufgabe A
        </li>
    )
}