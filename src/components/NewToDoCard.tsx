import { useState } from "react";
import styles from "./ToDo.module.css";
import plusIcon from "../assets/icons/plus-circle-svgrepo-com.svg";
import Modal from "./Modal.tsx";
import ToDoForm from "./ToDoForm.tsx";

export default function NewToDoCard(){
    const [open, setOpen] = useState(false);

    function openNewToDoDialog(){
        setOpen(true);
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
            <Modal open={open} onClose={() => setOpen(false)} title="Neues ToDo">
                <h3>Neues ToDo erstellen</h3>
                <ToDoForm
                    initialDescription=""
                    initialStatus="OPEN"
                    onSave={(data) => {
                        console.log("Geändertes ToDo:", data);
                    }}
                    saveLabel="Speichern"
                />
            </Modal>
        </>
    );
}
