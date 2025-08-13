import './App.css'
import {Route, Routes} from "react-router-dom";
import OverviewPage from "./pages/OverviewPage.tsx";
import Navbar from "./components/Navbar.tsx";
import {useEffect, useState} from "react";
import type {ToDo} from "./types/ToDo.ts";
import axios from "axios";

function App() {
    const [todos, setTodos] = useState<ToDo[]>([]);

    useEffect(() => {
        axios
            .get<ToDo[]>("/api/todo")
            .then(res => setTodos(res.data));
    }, []);

  return (
    <>
        <h1>Kanban</h1>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<OverviewPage todos={todos} />}></Route>
            <Route path={"/todo/open"} element={<OverviewPage todos={todos} />}></Route>
            <Route path={"/todo/in_progress"} element={<OverviewPage todos={todos} />}></Route>
            <Route path={"/todo/done"} element={<OverviewPage todos={todos} />}></Route>
        </Routes>
    </>
  )
}

export default App
