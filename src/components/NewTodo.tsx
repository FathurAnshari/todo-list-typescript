import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/TodosContext";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const inputTodoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputTodoRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Add New Todo</label>
      <input type="text" id="text" ref={inputTodoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
