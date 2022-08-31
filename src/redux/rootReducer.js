import { combineReducers } from "redux";
import filterReducer from "../redux/filters/reducer";
import todoReducer from "../redux/todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
