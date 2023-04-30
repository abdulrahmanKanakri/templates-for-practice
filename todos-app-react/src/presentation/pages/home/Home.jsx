import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./partials/TodoList";
import TodosForm from "./partials/TodosForm";
import { createTodo, fetchTodos, deleteTodoAction, toggleTodoAction } from "./redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  function formSubmitted({ title }) {
    dispatch(createTodo({ title, completed: false }));
  }

  function deleteTodo(id) {
    dispatch(deleteTodoAction(id));
  }

  function toggleCompletion({ id, completed }) {
    dispatch(toggleTodoAction({ id, completed: !completed }));
  }

  return (
    <div className="container pt-3 mt-3 pb-3">
      <h1 className="text-center mb-3">
        This is the home page 
        { loading && <span> | loading...</span> }
        { error && <span> | { error } </span>}
      </h1>
      <TodosForm onFormSubmitted={ formSubmitted } />
      <TodoList 
        todos={ items.slice(-15) } 
        onDeleteTodo={ deleteTodo } 
        toggleCompletion={ toggleCompletion } 
      />
    </div>
  );
}
