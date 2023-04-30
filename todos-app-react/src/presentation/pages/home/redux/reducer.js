import * as actionTypes from "./actionTypes";
import * as states from "./states";

export const todosReducer = (state = states.initialState(), { type, payload }) => {
  switch(type) {
    case actionTypes.FETCH_TODOS_START:
      return states.defaultLoadingState(state);
    case actionTypes.FETCH_TODOS_SUCCESS:
      return states.fetchTodosSuccessState(state, payload);
    case actionTypes.FETCH_TODOS_FAIL:
      return states.fetchTodosFailState(state, payload);
    case actionTypes.CREATE_TODO_START:
      return states.defaultLoadingState(state);
    case actionTypes.CREATE_TODO_SUCCESS:
      return states.createTodoSuccessState(state, payload);
    case actionTypes.CREATE_TODO_FAIL:
      return states.defaultFailState(state, payload);
    case actionTypes.DELETE_TODO_START:
      return states.defaultLoadingState(state);
    case actionTypes.DELETE_TODO_SUCCESS:
      return states.deleteTodoSuccessState(state, payload);
    case actionTypes.DELETE_TODO_FAIL:
      return states.defaultFailState(state, payload);
    case actionTypes.TOGGLE_TODO_START:
      return states.defaultLoadingState(state);
    case actionTypes.TOGGLE_TODO_SUCCESS:
      return states.toggleTodoSuccessState(state, payload);
    case actionTypes.TOGGLE_TODO_FAIL:
      return states.defaultFailState(state, payload);
    default:
      return state;
  }
}
