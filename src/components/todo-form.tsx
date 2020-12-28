import React, { useRef, useState } from "react";
import { TodoFormInterface, TodoInterface } from "../interface";
import shortid from "shortid";

// TodoForm component
const TodoForm = ({ handleTodoCreate }: TodoFormInterface) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  };

  const handleInputEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputRef.current?.value !== "") {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false,
      };

      handleTodoCreate(newTodo);

      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => handleInputChange(event)}
        onKeyPress={(event) => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;
