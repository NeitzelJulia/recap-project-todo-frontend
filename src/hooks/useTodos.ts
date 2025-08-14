import { useEffect, useState } from "react";
import type { ToDo } from "../types/ToDo";
import { fetchTodos, createTodo, type TodoPayload } from "../api/todos";

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
        return createTodo(payload)
            .then((created) => {
                setTodos(prev => [created, ...prev]);
                return created;
            });
    }

    return { todos, loading, error, addTodo, setTodos };
}