import styles from "./ToDo.module.css";
import type {ToDo} from "../types/ToDo.ts";

import editIcon from "../assets/icons/edit-svgrepo-com.svg";
import deleteIcon from "../assets/icons/delete-svgrepo-com.svg";
import detailsIcon from "../assets/icons/magnifier-search-zoom-svgrepo-com.svg";
import moveIcon from "../assets/icons/arrow-double-end-svgrepo-com.svg";

type ToDoProps = {
    todo: ToDo;
}

export default function ToDoCard({todo}: ToDoProps) {
    return (
        <li className={styles.card}>
            <div className={styles.cardContent}>
                <span className={styles.cardText}>{todo.description}</span>
            </div>
            <div className={styles.cardActions}>
                <button className={styles.iconButton} title="Bearbeiten">
                    <img src={editIcon} alt="Bearbeiten" className={styles.iconSvg} />
                </button>
                <button className={styles.iconButton} title="Löschen">
                    <img src={deleteIcon} alt="Löschen" className={styles.iconSvg} />
                </button>
                <button className={styles.iconButton} title="Details anzeigen">
                    <img src={detailsIcon} alt="Details" className={styles.iconSvg} />
                </button>
                <button className={styles.iconButton} title="Eine Lane weiter">
                    <img src={moveIcon} alt="Eine Lane weiter" className={styles.iconSvg} />
                </button>
            </div>
        </li>
    )
}
