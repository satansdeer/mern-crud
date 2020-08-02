import React from "react";
import { TodoForm } from "./TodoForm";
import { createTodo } from "./api";
import { useHistory } from "react-router-dom";

export const CreateTodo = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createTodo(data)
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3>
        <TodoForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
