import styles from "./Lane.module.css";
import type {Status} from "../types/Status.ts";
import {statusLabels} from "../types/Status.ts";
import ToDoCard from "./ToDoCard.tsx";
import type {ToDo} from "../types/ToDo.ts";

type LaneProps = {
    status: Status;
    todos: ToDo[];
}

export default function Lane({status, todos}: LaneProps) {

    return (
        <div className={styles.lane}>
            <div className={styles.laneHeader}>
                <h2 className={styles.laneTitle}>{statusLabels[status]}</h2>
                <span className={styles.laneBadge}>0</span>
            </div>
            <ul className={styles.laneList}>
                {todos.map((todo) =>
                    <ToDoCard todo={todo} key={todo.id}/>
                )}

            </ul>
        </div>
    )
}