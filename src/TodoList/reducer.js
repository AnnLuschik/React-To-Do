import {
  ADD_TODO, DELETE_TODO, CHANGE_TODO_COMPLETION_STATUS, CHANGE_CURRENT_PAGE,
} from './action';

const initialState = {
  currentPage: 'all',
  todos: [],
};

export function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, {
          title: action.payload,
          isDone: false,
          id: String(Math.random()),
        }],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case CHANGE_TODO_COMPLETION_STATUS: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        }),
      };
    }
    default: return state;
  }
}
