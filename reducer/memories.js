import {
  ADD_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS,
  FILTER_TODOS,
  ADD_MEMORY,
  GET_ALL_MEMORIES,
  DELETE_MEMORY,
  UPDATE_MEMORY,
  SET_PENDING,
  GET_ALL_MEMORIES_REFRESH,
  DESTROY_MEMORIES,
  SET_DARK_MODE,
} from '../action/types';

const initialState = {
  memories: [],
  pending: false,
  dark: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case UPDATE_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? {
                ...todo,
                ...payload,
              }
            : todo,
        ),
      };
    case FILTER_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.title.includes(payload)),
      };
    case ADD_MEMORY:
      return {
        ...state,
        memories: [payload, ...state.memories],
      };
    case GET_ALL_MEMORIES:
      return {
        ...state,
        memories: [...state.memories, ...payload],
      };
    case GET_ALL_MEMORIES_REFRESH:
      return {
        ...state,
        memories: payload,
      };
    case DELETE_MEMORY:
      return {
        ...state,
        memories: state.memories.filter((memory) => memory._id !== payload),
      };
    case UPDATE_MEMORY:
      return {
        ...state,
        memories: state.memories.map((memory) =>
          memory._id === payload._id ? {...memory, ...payload} : memory,
        ),
      };
    case SET_PENDING:
      return {
        ...state,
        pending: payload,
      };
    case DESTROY_MEMORIES:
      return {
        ...initialState,
        pending: true,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        dark: payload,
      };

    default:
      return state;
  }
}
