import axios from "axios";
import { APIKey } from "../API/giphyAPIKey";
import {
  FETCH_GIF_REQUEST,
  FETCH_GIF_FAILURE,
  FETCH_GIF_SUCCESS
} from "./types";

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
