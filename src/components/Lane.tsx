import styles from "./Lane.module.css";
import type {Status} from "../types/Status.ts";
import {statusLabels} from "../types/Status.ts";
import ToDoCard from "./ToDoCard.tsx";
import axios from "axios";
import type {ToDo} from "../types/ToDo.ts";
import {useState} from "react";

type LaneProps = {
    status: Status;
}

export default function Lane({ status }: LaneProps) {

    const [todos, setTodos] = useState<ToDo[]>([]);
    const laneTodos = todos
        .filter((t) => t.status === status)

    function getAllTodos() {
        axios.get("/api/todo")
            .then((res) => setTodos(res.data));
    }

    getAllTodos();

    return (
        <div className={styles.lane}>
            <div className={styles.laneHeader}>
                <h2 className={styles.laneTitle}>{statusLabels[status]}</h2>
                <span className={styles.laneBadge}>0</span>
            </div>
            <ul className={styles.laneList}>
                {laneTodos.map((todo) =>
                    <ToDoCard todo={todo}/>
                )}

            </ul>
        </div>
    )
}