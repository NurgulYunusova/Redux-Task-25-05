import { useSelector } from "react-redux";

function Todos() {
  const { todos, loading } = useSelector((state) => state.todosReducer);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {todos && todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      )}
    </>
  );
}

export default Todos;
