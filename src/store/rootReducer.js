import { combineReducers } from 'redux';
import { todoListReducer } from '../TodoList';
import { recipeReducer } from '../Recipes';

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  recipe: recipeReducer,
});
