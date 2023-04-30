import { TodosRepo } from "../../../../data/repos/TodosRepo";
import * as actionTypes from "./actionTypes";

const todosRepo = TodosRepo();

const fetchTodosStart = () => ({
  type: actionTypes.FETCH_TODOS_START,
});

const fetchTodosSuccess = (todos) => ({
  type: actionTypes.FETCH_TODOS_SUCCESS,
  payload: {
    todos,
  }
});

const fetchTodosFail = (error) => ({
  type: actionTypes.FETCH_TODOS_FAIL,
  payload: {
    todos: [],
    error,
  }
});

export function fetchTodos() {
  return (dispatch) => {
    dispatch(fetchTodosStart());
    todosRepo.getTodos()
      .then(data => dispatch(fetchTodosSuccess(data)))
      .catch(err => dispatch(fetchTodosFail(err.message)));
  }
}

const createTodoStart = () => ({
  type: actionTypes.CREATE_TODO_START,
});

const createTodoSuccess = (todo) => ({
  type: actionTypes.CREATE_TODO_SUCCESS,
  payload: {
    todo
  }
});

const createTodoFail = (error) => ({
  type: actionTypes.CREATE_TODO_FAIL,
  payload: {
    error,
  }
});

export const createTodo = (todo) => {
  return (dispatch) => {
    dispatch(createTodoStart());
    todosRepo.createTodo(todo)
      .then(res => dispatch(createTodoSuccess(res)))
      .catch(err => dispatch(createTodoFail(err.message)));
  }
}

const deleteTodoStart = () => ({
  type: actionTypes.DELETE_TODO_START,
});

const deleteTodoSuccess = (id) => ({
  type: actionTypes.DELETE_TODO_SUCCESS,
  payload: {
    id
  }
});

const deleteTodoFail = (error) => ({
  type: actionTypes.DELETE_TODO_FAIL,
  payload: {
    error,
  }
});

export const deleteTodoAction = (id) => {
  return (dispatch) => {
    dispatch(deleteTodoStart());
    todosRepo.deleteTodo(id)
      .then(res => dispatch(deleteTodoSuccess(id)))
      .catch(err => dispatch(deleteTodoFail(err.message)));
  }
}

const toggleTodoStart = () => ({
  type: actionTypes.TOGGLE_TODO_START,
});

const toggleTodoSuccess = (todo) => ({
  type: actionTypes.TOGGLE_TODO_SUCCESS,
  payload: {
    todo
  }
});

const toggleTodoFail = (error) => ({
  type: actionTypes.TOGGLE_TODO_FAIL,
  payload: {
    error,
  }
});

export const toggleTodoAction = (todo) => {
  return (dispatch) => {
    dispatch(toggleTodoStart());
    todosRepo.toggleCompleted(todo)
      .then(res => dispatch(toggleTodoSuccess(res)))
      .catch(err => dispatch(toggleTodoFail(err.message)));
  }
}
