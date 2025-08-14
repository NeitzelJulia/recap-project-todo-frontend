import axios from "axios";
import type {ToDo} from "../types/ToDo";

export type Status = "OPEN" | "IN_PROGRESS" | "DONE";
export type TodoPayload = { description: string; status: Status };

export function fetchTodos() {
    return axios.get<ToDo[]>("/api/todo").then(r => r.data);
}

export function createTodo(payload: TodoPayload) {
    return axios.post<ToDo>("/api/todo", payload).then(r => r.data);
}