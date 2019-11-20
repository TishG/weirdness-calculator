import {
  FETCH_GIF_REQUEST,
  FETCH_GIF_FAILURE,
  FETCH_GIF_SUCCESS
} from "./types";

const initialState = {
  loading: false,
  userMessage: "",
  result: [],
  gifList: [],
  weirdnessScore: null
};

export const rootReducer = (state = initialState, action) => {
  console.log("RESULT FROM REDUCER", state.result);
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
        result: []
      };
    default:
      return state;
  }
};
