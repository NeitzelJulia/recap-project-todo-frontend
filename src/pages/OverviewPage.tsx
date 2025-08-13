import lanestyles from "./OverviewPage.module.css";
import styles from "./Page.module.css";
import Lane from "../components/Lane.tsx";

export default function OverviewPage() {
    return (
        <section className={styles.board}>
            <header className={styles.boardHeader}>
                <h1 className={styles.boardTitle}>Overview</h1>
            </header>

            <div className={lanestyles.lanes}>
                <Lane status="OPEN" />
                <Lane status="IN_PROGRESS" />
                <Lane status="DONE" />
            </div>
        </section>
    );
}
