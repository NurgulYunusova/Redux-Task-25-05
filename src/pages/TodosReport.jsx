import { useSelector } from "react-redux";

function TodosReport() {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <>
      <h3>Todos length: {todos.length}</h3>
    </>
  );
}

export default TodosReport;
