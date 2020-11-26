import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { getRecipeMiddleware, getMoreRecipeMiddleware } from '../Recipes';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(getRecipeMiddleware, getMoreRecipeMiddleware),
));
