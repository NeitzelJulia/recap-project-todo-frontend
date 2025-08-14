import styles from "./Lane.module.css";
import type {Status} from "../types/Status.ts";
import {statusLabels} from "../types/Status.ts";
import ToDoCard from "./ToDoCard.tsx";
import type {ToDo} from "../types/ToDo.ts";
import NewToDoCard from "./NewToDoCard.tsx";
import type {TodoPayload} from "../api/todos";
import Modal from "./Modal.tsx";
import ToDoForm from "./ToDoForm.tsx";
import {useState} from "react";

type LaneProps = {
    status: Status;
    todos: ToDo[];
    onCreate?: (p: TodoPayload) => void;
    onDelete?: (id: string) => void;
    onMoveNext?: (t: ToDo) => void;
    onUpdate?: (t: ToDo) => void;
};

export default function Lane({status, todos, onCreate, onDelete, onMoveNext, onUpdate}: LaneProps) {

    const [editing, setEditing] = useState<ToDo | null>(null);
    const [details, setDetails] = useState<ToDo | null>(null);

    function handleEditSave(data: { description: string; status: "OPEN" | "IN_PROGRESS" | "DONE" }) {
        if (!editing || !onUpdate) return;
        onUpdate({ ...editing, description: data.description, status: data.status });
        setEditing(null);
    }

    return (
        <div className={styles.lane}>
            <div className={styles.laneHeader}>
                <h2 className={styles.laneTitle}>{statusLabels[status]}</h2>
                <span className={styles.laneBadge}>{todos.length}</span>
            </div>
            <ul className={styles.laneList}>
                {todos.map((todo) =>
                    <ToDoCard
                        todo={todo}
                        key={todo.id}
                        onDelete={onDelete}
                        onMoveNext={onMoveNext}
                        onEdit={() => setEditing(todo)}
                        onDetails={() => setDetails(todo)}
                    />
                )}
                {status === "OPEN" && <NewToDoCard onCreate={onCreate} />}
            </ul>
            <Modal open={!!editing} onClose={() => setEditing(null)}>
                <h3>To-Do bearbeiten</h3>
                {editing && (
                    <ToDoForm
                        initialDescription={editing.description}
                        initialStatus={editing.status}
                        onSave={handleEditSave}
                        saveLabel="Änderungen speichern"
                    />
                )}
            </Modal>
            <Modal open={!!details} onClose={() => setDetails(null)}>
                <h3>To-Do Details</h3>
                {details && (
                    <div className={styles.details}>
                        <div className={styles.detailsRow}>
                            <div className={styles.detailsLabel}>ID:</div>
                            <div className={styles.detailsValue}>{details.id}</div>
                        </div>
                        <div className={styles.detailsRow}>
                            <div className={styles.detailsLabel}>Beschreibung:</div>
                            <div className={styles.detailsValue}>{details.description}</div>
                        </div>
                        <div className={styles.detailsRow}>
                            <div className={styles.detailsLabel}>Status:</div>
                            <div className={styles.detailsValue}>{details.status}</div>
                        </div>
                    </div>
                )}
            </Modal>

        </div>
    );
}
