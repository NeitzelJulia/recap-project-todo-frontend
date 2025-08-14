import { useState } from "react";
import styles from "./ToDoForm.module.css";

type ToDoFormProps = {
    initialDescription?: string;
    initialStatus?: "OPEN" | "IN_PROGRESS" | "DONE";
    onSave: (data: { description: string; status: "OPEN" | "IN_PROGRESS" | "DONE" }) => void;
    saveLabel?: string; // optionaler Text für den Button
};

export default function ToDoForm({
                                     initialDescription = "",
                                     initialStatus = "OPEN",
                                     onSave,
                                     saveLabel = "Speichern",
                                 }: ToDoFormProps) {
    const [description, setDescription] = useState(initialDescription);
    const [status, setStatus] = useState(initialStatus);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSave({ description, status });
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <span className={styles.label}>Beschreibung:</span>
                <input
                    className={styles.input}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Status:</span>
                <select
                    className={styles.select}
                    onChange={(e) => setStatus(e.target.value as "OPEN" | "IN_PROGRESS" | "DONE")}
                    value={status}
                >
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                </select>
            </div>

            <button type="submit" className={styles.button}>
                {saveLabel}
            </button>
        </form>
    );
}
