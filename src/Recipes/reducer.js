import {
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE,
  GET_RECIPE_REQUEST,
  GET_MORE_RECIPE_SUCCESS,
  GET_MORE_RECIPE_FAILURE,
  GET_MORE_RECIPE_REQUEST,
  GET_RECIPE_DATA,
  DELETE_RECIPE_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './actions';

const initialState = {
  data: null,
  errorMessage: null,
  loading: false,
  loadingMore: false,
  selectedRecipeData: null,
  isAuthorized: false,
};

export function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case GET_RECIPE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    }
    case GET_RECIPE_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case GET_MORE_RECIPE_SUCCESS: {
      return {
        ...state,
        loadingMore: false,
        data: {
          ...action.payload,
          hits: [...state.data.hits, ...action.payload.hits],
        },
      };
    }
    case GET_MORE_RECIPE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        loadingMore: false,
      };
    }
    case GET_MORE_RECIPE_REQUEST: {
      return {
        ...state,
        loadingMore: true,
        errorMessage: null,
      };
    }

    case GET_RECIPE_DATA: {
      return {
        ...state,
        selectedRecipeData: {
          ...state.data.hits.find((item) => item.recipe.uri === action.payload),
        },
      };
    }
    case DELETE_RECIPE_DATA: {
      return {
        ...state,
        selectedRecipeData: null,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthorized: true,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuthorized: false,
      };
    }

    default: return state;
  }
}
