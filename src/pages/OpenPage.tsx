import lanestyles from "./OverviewPage.module.css";
import styles from "./Page.module.css";
import Lane from "../components/Lane.tsx";
import type {ToDo} from "../types/ToDo.ts";
import type {TodoPayload} from "../api/todos";

type OverviewPageProps = {
    todos: ToDo[];
    onCreate: (p: TodoPayload) => void;
    onDelete: (id: string) => void;
    onMoveNext: (t: ToDo) => void;
};

export default function OpenPage({todos, onCreate, onDelete, onMoveNext}: OverviewPageProps) {
    return (
        <section className={styles.board}>
            <div className={lanestyles.lanes}>
                <Lane status="OPEN"
                      todos={todos.filter(t => t.status === "OPEN")}
                      onCreate={onCreate}
                      onDelete={onDelete}
                      onMoveNext={onMoveNext}
                />
            </div>
        </section>
    );
}
