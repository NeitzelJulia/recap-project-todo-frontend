import { useState } from "react";
import styles from "./ToDo.module.css";
import plusIcon from "../assets/icons/plus-circle-svgrepo-com.svg";
import Modal from "./Modal.tsx";
import ToDoForm from "./ToDoForm.tsx";
import axios from "axios";

type Status = "OPEN" | "IN_PROGRESS" | "DONE";
type TodoPayload = { description: string; status: Status };

export default function NewToDoCard(){
    const [open, setOpen] = useState(false);

    function openNewToDoDialog(){
        setOpen(true);
    }

    function saveNewTodo(data: TodoPayload) {
        axios
            .post("/api/todo", data)
            .then((res) => {
                console.log("Todo erstellt:", res.data);
                setOpen(false); // Modal schließen
            })
            .catch((err) => {
                console.error("Fehler beim Erstellen:", err);
            });
    }

    return (
        <>
            <li
                className={`${styles.card} ${styles.newToDo}`}
                onClick={openNewToDoDialog}
                role="button"
            >
                <img src={plusIcon} alt="Neues ToDo hinzufügen" className={styles.plusSvg} />
            </li>
            <Modal open={open} onClose={() => setOpen(false)}>
                <h3>Neues To-Do erstellen</h3>
                <ToDoForm
                    initialDescription=""
                    initialStatus="OPEN"
                    onSave={saveNewTodo}
                    saveLabel="Speichern"
                />
            </Modal>
        </>
    );
}
