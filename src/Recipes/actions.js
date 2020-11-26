export const GET_RECIPE_REQUEST = 'GET_RECIPE_REQUEST';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE';

export const GET_MORE_RECIPE_REQUEST = 'GET_MORE_RECIPE_REQUEST';
export const GET_MORE_RECIPE_SUCCESS = 'GET_MORE_RECIPE_SUCCESS';
export const GET_MORE_RECIPE_FAILURE = 'GET_MORE_RECIPE_FAILURE';

export const SHOW_RECIPE_DATA = 'SHOW_RECIPE_DATA';

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

export function showRecipeData(key) {
  return {
    type: SHOW_RECIPE_DATA,
    payload: key,
  };
}
