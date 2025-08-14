import { useEffect, useState } from "react";
import type { ToDo } from "../types/ToDo";
import {
    fetchTodos,
    createTodo,
    deleteTodoApi,
    updateTodoApi,
    type TodoPayload,
    type Status
} from "../api/todos";

const NEXT_STATUS: Record<Status, Status> = {
    OPEN: "IN_PROGRESS",
    IN_PROGRESS: "DONE",
    DONE: "DONE",
};

export function useTodos() {
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        fetchTodos()
            .then(setTodos)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    function addTodo(payload: TodoPayload) {
        createTodo(payload)
            .then((created) => setTodos(prev => [...prev, created]))
            .catch(setError);
    }

    function removeTodo(id: string) {
        deleteTodoApi(id)
            .then(() => setTodos(prev => prev.filter(t => t.id !== id)))
            .catch(setError);
    }

    function updateTodo(updated: ToDo) {
        updateTodoApi(updated)
            .then((saved) =>
                setTodos(prev => prev.map(t => (t.id === saved.id ? saved : t)))
            )
            .catch(setError);
    }

    function moveToNextLane(todo: ToDo) {
        const next = NEXT_STATUS[todo.status];
        if (next === todo.status) return; // DONE bleibt DONE
        updateTodo({ ...todo, status: next });
    }

    return { todos, loading, error, addTodo, removeTodo, updateTodo, moveToNextLane, setTodos };
}
