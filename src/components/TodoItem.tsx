import * as React from "react";

interface TodoItemProps {
  text: String;
  done: Boolean;
  onToggle(): void;
  onRemove(): void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({ text, done, onToggle, onRemove }) => (
  <li>
    <strong onClick={onToggle} style={{ textDecoration: done ? "line-through" : "none" }}>
      {text}
    </strong>
    <button style={{ all: "unset", marginLeft: "0.5rem" }} onClick={onRemove}>
      [지우기]
    </button>
  </li>
);

export default TodoItem;
