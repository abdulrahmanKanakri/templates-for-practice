export default function TodoItem({ todo, onDeleteTodo, toggleCompletion }) {
  return (
    <div className="todo-item" onDoubleClick={ () => toggleCompletion(todo) }>
      <div className="todo-item__id">{ todo.id }#</div>
      <div className="todo-item__title">
        { todo.completed ? <strike>{ todo.title }</strike> : todo.title }
      </div>
      <button className="todo-item__delete" onClick={ () => onDeleteTodo(todo.id) }>&times;</button>
    </div>
  );
}
