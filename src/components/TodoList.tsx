import * as React from "react";
import TodoItem from './TodoItem';

interface TodoListProps {}

interface TodoListState {
  input: string;
  todoItems: TodoItemState[];
}

interface TodoItemState {
  id: number;
  text: string;
  done: boolean;
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  nextTodoId: number = 0;
  todoListState: TodoListState = {
    input: '',
    todoItems: []
  };

  onToggle = (id: number): void => {
    
  }
}