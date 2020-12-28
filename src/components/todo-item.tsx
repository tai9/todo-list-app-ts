import React from "react";
import { TodoItemInterface } from "../interface";
// TodoItem Component
const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item">
      <div onClick={() => props.handleTodoComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked"></span>
        )}
      </div>

      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.text}
          onBlur={props.handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
        />
      </div>

      <div
        className="item-remove"
        onClick={() => props.handleTodoRemove(props.todo.id)}
      >
        ⨯
      </div>
    </div>
  );
};

export default TodoItem;
