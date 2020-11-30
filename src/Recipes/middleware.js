// import history from 'history/browser';
import {
  GET_RECIPE_REQUEST,
  GET_MORE_RECIPE_REQUEST,
  LOGIN_REQUEST,
  getRecipeSuccess,
  getRecipeFailure,
  getMoreRecipeSuccess,
  getMoreRecipeFailure,
  loginSuccess,
  loginFailure,
} from './actions';

export const getRecipeMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_RECIPE_REQUEST) {
    fetch(`https://api.edamam.com/search?app_id=6989cdbd&app_key=ab66a379e5211f03b187868aaf4c7b60&q=${action.payload}`)
      .then((response) => response.json())
      .then((result) => store.dispatch(getRecipeSuccess(result)))
      .catch((error) => store.dispatch(getRecipeFailure(error)));
  }
  next(action);
};

export const getMoreRecipeMiddleware = (store) => (next) => (action) => {
  const { recipe: { data } } = store.getState();

  if (data) {
    const { q, to } = data;

    if (action.type === GET_MORE_RECIPE_REQUEST) {
      fetch(`https://api.edamam.com/search?app_id=6989cdbd&app_key=ab66a379e5211f03b187868aaf4c7b60&from=${to}&q=${q}`)
        .then((response) => response.json())
        .then((result) => store.dispatch(getMoreRecipeSuccess(result)))
        .catch((error) => store.dispatch(getMoreRecipeFailure(error)));
    }
  }
  next(action);
};

export const loginMiddleware = (store) => (next) => (action) => {
  if (action.type === LOGIN_REQUEST) {
    if (action.payload) {
      localStorage.setItem('user', action.payload);
      store.dispatch(loginSuccess());
    } else {
      store.dispatch(loginFailure());
    }
  }
  next(action);
};

// export const bootstrapMiddleware = () => (next) => (action) => {
//   if (action.type === BOOTSTRAP) {
//     // const { recipe: { isAuthorized } } = store.getState();
//     const isAuth = localStorage.getItem('user');

//     if (isAuth) {
//       history.push('/');
//     } else {
//       history.push('/login');
//     }
//   }
//   next(action);
// };
