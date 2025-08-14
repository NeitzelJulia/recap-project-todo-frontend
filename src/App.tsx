import './App.css'
import {Route, Routes} from "react-router-dom";
import OverviewPage from "./pages/OverviewPage.tsx";
import Navbar from "./components/Navbar.tsx";
import {useEffect, useState} from "react";
import type {ToDo} from "./types/ToDo.ts";
import axios from "axios";
import type {TodoPayload} from "./api/todos";

function App() {
    const [todos, setTodos] = useState<ToDo[]>([]);

    useEffect(() => {
        axios.get<ToDo[]>("/api/todo").then(res => setTodos(res.data));
    }, []);

    function addTodo(payload: TodoPayload) {
        axios
            .post<ToDo>("/api/todo", payload)
            .then((res) => {
                setTodos(prev => [ ...prev, res.data,]);
            })
            .catch((err) => {
                console.error("Fehler beim Erstellen:", err);
            });
    }

    return (
        <>
            <h1>Kanban</h1>
            <Navbar />
            <Routes>
                <Route path="/" element={<OverviewPage todos={todos} onCreate={addTodo} />} />
                <Route path="/todo/open" element={<OverviewPage todos={todos} onCreate={addTodo} />} />
                <Route path="/todo/in_progress" element={<OverviewPage todos={todos} onCreate={addTodo} />} />
                <Route path="/todo/done" element={<OverviewPage todos={todos} onCreate={addTodo} />} />
            </Routes>
        </>
    );
}

export default App;
