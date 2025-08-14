import lanestyles from "./OverviewPage.module.css";
import styles from "./Page.module.css";
import Lane from "../components/Lane.tsx";
import type {ToDo} from "../types/ToDo.ts";
import type {TodoPayload} from "../api/todos";

type OverviewPageProps = {
    todos: ToDo[];
    onCreate: (p: TodoPayload) => void;
};

export default function OverviewPage({todos, onCreate}: OverviewPageProps) {
    return (
        <section className={styles.board}>
            <header className={styles.boardHeader}>
                <h1 className={styles.boardTitle}>Overview</h1>
            </header>

            <div className={lanestyles.lanes}>
                <Lane status="OPEN"        todos={todos.filter(t => t.status === "OPEN")} onCreate={onCreate} />
                <Lane status="IN_PROGRESS" todos={todos.filter(t => t.status === "IN_PROGRESS")} />
                <Lane status="DONE"        todos={todos.filter(t => t.status === "DONE")} />
            </div>
        </section>
    );
}
