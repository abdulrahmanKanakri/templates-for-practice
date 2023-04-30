import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "../pages/home/redux/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
