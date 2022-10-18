import React from "react";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputData, setInputData] = useState({
    title: "",
    text: ""
  });

  const addNewTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    setInputData({
      title: "",
      text: ""
    });
  };

  const renderTodos = (todos) => {
    return todos.map((todo) => {
      return (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.text}</p>
        </div>
      );
    });
  };
  return (
    <>
      <input
        value={inputData.title}
        onChange={(e) => setInputData({ ...inputData, title: e.target.value })}
      />
      <input
        value={inputData.text}
        onChange={(e) => setInputData({ ...inputData, text: e.target.value })}
      />
      <button
        style={{ marginTop: "10px" }}
        onClick={() =>
          addNewTodo({
            title: inputData.title,
            text: inputData.text,
            id: todos.length + 1
          })
        }
      >
        Add new
      </button>
      {renderTodos(todos)}
    </>
  );
}

export default Todo;
