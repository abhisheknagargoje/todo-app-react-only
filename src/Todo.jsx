import React from "react";
import { TrashIcon } from "@heroicons/react/solid";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      className={
        "flex w-full p-2 rounded-md " + (todo.completed ? "bg-neutral-400" : "")
      }
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        defaultChecked={todo.completed}
        onClick={() => completeTodo(index)}
      />
      <li
        className={
          "mx-4 capitalize w-full cursor-pointer " +
          (todo.completed && "line-through")
        }
        onClick={() => completeTodo(index)}
      >
        {todo.name}
      </li>
      <TrashIcon
        className="h-7 cursor-pointer"
        onClick={() => deleteTodo(index)}
      />
    </div>
  );
}

export default Todo;
