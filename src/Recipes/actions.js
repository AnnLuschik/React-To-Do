export const GET_RECIPE_REQUEST = 'GET_RECIPE_REQUEST';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE';

export const GET_MORE_RECIPE_REQUEST = 'GET_MORE_RECIPE_REQUEST';
export const GET_MORE_RECIPE_SUCCESS = 'GET_MORE_RECIPE_SUCCESS';
export const GET_MORE_RECIPE_FAILURE = 'GET_MORE_RECIPE_FAILURE';

export const GET_RECIPE_DATA = 'GET_RECIPE_DATA';
export const DELETE_RECIPE_DATA = 'DELETE_RECIPE_DATA';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const BOOTSTRAP = 'BOOTSTRAP';

export function getRecipeRequest(query) {
  return {
    type: GET_RECIPE_REQUEST,
    payload: query,
  };
}
export function getRecipeSuccess(data) {
  return {
    type: GET_RECIPE_SUCCESS,
    payload: data,
  };
}
export function getRecipeFailure(error) {
  return {
    type: GET_RECIPE_FAILURE,
    payload: error,
  };
}

export function getMoreRecipeRequest() {
  return {
    type: GET_MORE_RECIPE_REQUEST,
  };
}
export function getMoreRecipeSuccess(data) {
  return {
    type: GET_MORE_RECIPE_SUCCESS,
    payload: data,
  };
}
export function getMoreRecipeFailure(error) {
  return {
    type: GET_MORE_RECIPE_FAILURE,
    payload: error,
  };
}

export function getRecipeData(key) {
  return {
    type: GET_RECIPE_DATA,
    payload: key,
  };
}
export function deleteRecipeData() {
  return {
    type: DELETE_RECIPE_DATA,
  };
}

export function loginRequest(inputValue) {
  return {
    type: LOGIN_REQUEST,
    payload: inputValue,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

// export function bootstrap() {
//   return {
//     type: BOOTSTRAP,
//   };
// }
