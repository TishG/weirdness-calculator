import axios from "axios";
import { APIKey } from "../API/giphyAPIKey";
import {
  FETCH_GIF_REQUEST,
  FETCH_GIF_FAILURE,
  FETCH_GIF_SUCCESS,
  ADD_GIF,
  SET_USER_MESSAGE,
  REMOVE_GIF
} from "./types";

export const addGIF = () => {
  return {
    type: ADD_GIF
  };
};

export const removeGIF = id => {
  console.log("REMOVING GIF", id);
  return {
    type: REMOVE_GIF,
    payload: id
  };
};
export const setUserMessage = message => {
  return {
    type: SET_USER_MESSAGE,
    payload: message
  };
};

export const fetchGIFRequest = () => ({ type: FETCH_GIF_REQUEST });
export const fetchGIFSuccess = gif => {
  return {
    type: FETCH_GIF_SUCCESS,
    payload: gif
  };
};
export const fetchGIFFailure = err => {
  return {
    type: FETCH_GIF_FAILURE,
    payload: err
  };
};

export const fetchGIF = (search, weirdness) => dispatch => {
  dispatch(fetchGIFRequest());
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${search}&weirdness=${weirdness}&limit=1&offset=0&rating=G&lang=en`
    )
    .then(res => dispatch(fetchGIFSuccess(res.data)))
    .catch(err => dispatch(fetchGIFFailure(err.message)));
};
