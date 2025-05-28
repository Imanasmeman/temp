import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim() === "") return;
    dispatch(
      addTodo({
        id: Date.now(),
        title,
        status: false,
      })
    );
    setTitle("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Add todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "8px",
            width: "70%",
            marginRight: "8px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.status ? "line-through" : "none",
                cursor: "pointer",
                flex: 1,
              }}
            >
              {todo.title}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{
                marginLeft: "12px",
                color: "red",
                cursor: "pointer",
                border: "none",
                background: "none",
                fontSize: "14px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
