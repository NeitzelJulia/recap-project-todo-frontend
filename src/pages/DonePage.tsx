import lanestyles from "./OverviewPage.module.css";
import styles from "./Page.module.css";
import Lane from "../components/Lane.tsx";
import type {ToDo} from "../types/ToDo.ts";

type OverviewPageProps = {
    todos: ToDo[];
    onDelete: (id: string) => void;
    onMoveNext: (t: ToDo) => void;
};

export default function DonePage({todos, onDelete, onMoveNext}: OverviewPageProps) {
    return (
        <section className={styles.board}>
            <div className={lanestyles.lanes}>
                <Lane status="DONE"
                      todos={todos.filter(t => t.status === "DONE")}
                      onDelete={onDelete}
                      onMoveNext={onMoveNext}
                />
            </div>
        </section>
    );
}
