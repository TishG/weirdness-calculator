import {
  FETCH_GIF_REQUEST,
  FETCH_GIF_FAILURE,
  FETCH_GIF_SUCCESS,
  ADD_GIF,
  SET_USER_MESSAGE,
  REMOVE_GIF,
  CLEAR_GIF_LIST
} from "./types";

const initialState = {
  loading: false,
  userMessage: "",
  search: "",
  result: [],
  gifList: [],
  weirdnessScore: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIF_REQUEST:
      return {
        ...state,
        loading: true,
        result: [],
        userMessage: ""
      };
    case FETCH_GIF_SUCCESS:
      return {
        ...state,
        loading: false,
        result: [action.payload],
        userMessage: ""
      };
    case FETCH_GIF_FAILURE:
      return {
        ...state,
        loading: false,
        userMessage: action.payload,
        result: [],
        search: ""
      };
    case ADD_GIF:
      return {
        ...state,
        gifList: [...state.gifList, state.result[0].data[0]],
        userMessage: "Please submit a new search term"
      };
    case REMOVE_GIF:
      return {
        ...state,
        gifList: state.gifList.filter(gif => gif.id !== action.payload),
        userMessage: ""
      };
    case CLEAR_GIF_LIST:
      return {
        ...state,
        gifList: []
      };
    case SET_USER_MESSAGE:
      return {
        ...state,
        userMessage: action.payload
      };
    default:
      return state;
  }
};
