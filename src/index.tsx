import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TodoInterface } from "./interface";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

import "./styles/styles.css";

const TodoListApp = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const handleTodoCreate = (todo: TodoInterface) => {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.push(todo);
    setTodos(newTodosState);
  };

  const handleTodoUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text =
      event.target.value;
    setTodos(newTodosState);
  };

  const handleTodoRemove = (id: string) => {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );
    setTodos(newTodosState);
  };

  const handleTodoComplete = (id: string) => {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;
    setTodos(newTodosState);
  };

  const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  };

  return (
    <div className="todo-list-app">
      <TodoForm handleTodoCreate={handleTodoCreate} todos={todos} />
      <TodoList
        todos={todos}
        handleTodoBlur={handleTodoBlur}
        handleTodoComplete={handleTodoComplete}
        handleTodoRemove={handleTodoRemove}
        handleTodoUpdate={handleTodoUpdate}
      />
    </div>
  );
};

ReactDOM.render(<TodoListApp />, document.getElementById("root"));
