import { PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    { name: "Learn React", completed: false },
  ]);
  const [input, setInput] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (input.length !== 0) {
      const todo = { name: input, completed: false };
      setTodos([...todos, todo]);
      setInput("");
    }
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((todo, idx) => idx !== index));
  }

  function deleteCompletedTodos(index) {
    setTodos(todos.filter((todo) => todo.completed === false));
  }

  return (
    <div className="p-7">
      <h1 className="text-center text-4xl">Todo App</h1>
      <div className="container w-1/2 mx-auto mt-5 p-4 bg-neutral-300 shadow-lg rounded-lg">
        <form className="flex" onSubmit={(e) => addTodo(e)}>
          <input
            type="text"
            placeholder="Add a new todo"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            className="p-2 mx-4 w-full rounded-lg"
          />
          <PlusCircleIcon className="h-10 cursor-pointer" />
        </form>
        <div className="m-4">
          <ul>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                index={index}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
        <div className="text-right">
          <button
            className="w-auto bg-red-400 p-1 rounded-md shadow-md"
            onClick={deleteCompletedTodos}
          >
            Delete Completed Todos!
          </button>
        </div>
      </div>
      <p className="text-center py-5">You have {todos.length} todos!</p>
    </div>
  );
}

export default App;
