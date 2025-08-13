import styles from "./ToDo.module.css";
import plusIcon from "../assets/icons/plus-circle-svgrepo-com.svg";


export default function NewToDoCard(){
    function openNewToDoDialog(){
        console.log("OpenNewToDoDialog");
    }

    return (
        <li className={`${styles.card} ${styles.newToDo}`}
            onClick={openNewToDoDialog}
            role="button"
        >
            <img src={plusIcon} alt="Neues ToDo hinzufügen" className={styles.plusSvg} />
        </li>
    )
}