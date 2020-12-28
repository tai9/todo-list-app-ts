// Todo interface
export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

// Todo form interface
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
  todos: TodoInterface[];
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Todo item interface
export interface TodoItemInterface {
  todo: TodoInterface;
  handleTodoUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
