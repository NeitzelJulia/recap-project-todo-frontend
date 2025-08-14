import styles from "./Lane.module.css";
import type {Status} from "../types/Status.ts";
import {statusLabels} from "../types/Status.ts";
import ToDoCard from "./ToDoCard.tsx";
import type {ToDo} from "../types/ToDo.ts";
import NewToDoCard from "./NewToDoCard.tsx";
import type {TodoPayload} from "../api/todos";

type LaneProps = {
    status: Status;
    todos: ToDo[];
    onCreate?: (p: TodoPayload) => void;
};

export default function Lane({status, todos, onCreate}: LaneProps) {
    return (
        <div className={styles.lane}>
            <div className={styles.laneHeader}>
                <h2 className={styles.laneTitle}>{statusLabels[status]}</h2>
                <span className={styles.laneBadge}>{todos.length}</span>
            </div>
            <ul className={styles.laneList}>
                {todos.map((todo) => <ToDoCard todo={todo} key={todo.id} />)}
                {status === "OPEN" && <NewToDoCard onCreate={onCreate} />}
            </ul>
        </div>
    );
}
