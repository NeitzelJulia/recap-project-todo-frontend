import { useState } from "react";
import styles from "./ToDo.module.css";
import plusIcon from "../assets/icons/plus-circle-svgrepo-com.svg";
import Modal from "./Modal.tsx";
import ToDoForm from "./ToDoForm.tsx";
import type {TodoPayload} from "../api/todos";

type Props = {
    onCreate?: (p: TodoPayload) => void;
};

export default function NewToDoCard({ onCreate }: Props){
    const [open, setOpen] = useState(false);

    function openNewToDoDialog(){
        setOpen(true);
    }

    function saveNewTodo(data: TodoPayload) {
        if (onCreate) onCreate(data);
        setOpen(false);
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
