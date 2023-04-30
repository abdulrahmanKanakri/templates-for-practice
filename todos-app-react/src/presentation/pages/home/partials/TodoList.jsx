import "./todos.css";

import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDeleteTodo, toggleCompletion }) {
  const todoItems = todos.map((todo, index) => {
    return (
      <TodoItem 
        key={ index } 
        todo={ todo } 
        onDeleteTodo={ onDeleteTodo } 
        toggleCompletion={ toggleCompletion }
      />
    );
  });
  return (
    <div className="todo-list">
      { todoItems }
    </div>
  );
}
