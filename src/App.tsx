import "./App.css";
import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage.tsx";
import Navbar from "./components/Navbar.tsx";
import { useTodos } from "./hooks/useTodos";
import OpenPage from "./pages/OpenPage.tsx";
import InProgressPage from "./pages/InProgressPage.tsx";
import DonePage from "./pages/DonePage.tsx";

function App() {
    const { todos, addTodo, removeTodo, moveToNextLane, updateTodo } = useTodos();

    return (
        <>
            <h1>Kanban</h1>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <OverviewPage
                        todos={todos}
                        onCreate={addTodo}
                        onDelete={removeTodo}
                        onMoveNext={moveToNextLane}
                        onUpdate={updateTodo}
                    />
                } />
                <Route path="/todo/open" element={
                    <OpenPage
                        todos={todos}
                        onCreate={addTodo}
                        onDelete={removeTodo}
                        onMoveNext={moveToNextLane}
                        onUpdate={updateTodo}
                    />
                } />
                <Route path="/todo/in_progress" element={
                    <InProgressPage
                        todos={todos}
                        onDelete={removeTodo}
                        onMoveNext={moveToNextLane}
                        onUpdate={updateTodo}
                    />
                } />
                <Route path="/todo/done" element={
                    <DonePage
                        todos={todos}
                        onDelete={removeTodo}
                        onMoveNext={moveToNextLane}
                        onUpdate={updateTodo}
                    />
                } />
            </Routes>
        </>
    );
}

export default App;
