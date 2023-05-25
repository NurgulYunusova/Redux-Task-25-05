import { Link, Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos";
import TodosReport from "./pages/TodosReport";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "./store/slices/todosSlice";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <div>
        <ul style={{ display: "flex", justifyContent: "center", gap: "150px" }}>
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/todosReport">Todos Report</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/todosReport" element={<TodosReport />}></Route>
      </Routes>
    </>
  );
}

export default App;
