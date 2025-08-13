import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link;
    return (
        <nav className={styles.nav}>
            <NavLink to={"/"} className={linkClass}>Home</NavLink>
            <NavLink to={"/todo/open"} className={linkClass}>Open</NavLink>
            <NavLink to={"/todo/in_progress"} className={linkClass}>In Progress</NavLink>
            <NavLink to={"/todo/done"} className={linkClass}>Done</NavLink>
        </nav>
    )
}