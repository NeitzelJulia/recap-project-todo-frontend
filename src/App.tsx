import './App.css'
import {Route, Routes} from "react-router-dom";
import OverviewPage from "./pages/OverviewPage.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
        <h1>Kanban</h1>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<OverviewPage/>}></Route>
            <Route path={"/todo/open"} element={<OverviewPage/>}></Route>
            <Route path={"/todo/in_progress"} element={<OverviewPage/>}></Route>
            <Route path={"/todo/done"} element={<OverviewPage/>}></Route>
        </Routes>
    </>
  )
}

export default App
