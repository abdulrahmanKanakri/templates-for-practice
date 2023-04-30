export const initialState = () => ({
  items: [],
  loading: false,
  error: null,
});

export const defaultLoadingState = (state) => ({
  ...state,
  loading: true,
});

export const defaultFailState = (state, { error }) => ({
  ...state,
  loading: false,
  error,
});

export const fetchTodosSuccessState = (state, { todos }) => ({
  ...state,
  loading: false,
  items: todos,
});

export const fetchTodosFailState = (state, { todos, error }) => ({
  ...state,
  loading: false,
  items: todos,
  error: error,
});

export const createTodoSuccessState = (state, { todo }) => ({
  ...state,
  items: [...state.items, todo],
  loading: false,
});

export const deleteTodoSuccessState = (state, { id }) => ({
  ...state,
  items: state.items.filter(item => item.id !== id),
  loading: false,
});

export const toggleTodoSuccessState = (state, { todo }) => ({
  ...state,
  items: state.items.map(item => item.id === todo.id ? todo : item),
  loading: false,
});
