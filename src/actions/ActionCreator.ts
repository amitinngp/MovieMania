import axios from "axios";
import { Dispatch } from "redux";
import {
  LOADING_START,
  LOADING_DONE,
  MovieActions,
  RETRIEVE_MOVIES,
  RETRIEVE_MOVIE_DETAILS,
} from "./Actions";
import { setFetchURL } from "./../store/Constant";

export const fetchMovie = (id: string | undefined) => async (
  dispatch: Dispatch<MovieActions>
) => {
  const url = setFetchURL(id, "i");
  loadingStart(dispatch);
  await axios
    .get(url)
    .then((response) => {
      loadingDone(dispatch);
      dispatch({
        type: RETRIEVE_MOVIE_DETAILS,
        id: id,
        movie: response.data,
      });
    })
    .catch((error) => {
      return "Error Occured!".concat(error);
    });
};

export const fetchMovies = (searchText: string) => async (
  dispatch: Dispatch<MovieActions>
) => {
  const url = setFetchURL(searchText, "s");
  loadingStart(dispatch);
  await axios
    .get(url)
    .then((response) => {
      loadingDone(dispatch);
      dispatch({
        type: RETRIEVE_MOVIES,
        movies: response.data.Search,
      });
    })
    .catch((error) => {
      return "Error Occured!".concat(error);
    });
};

export const loadingStart = (dispatch: Dispatch<MovieActions>) => {
  dispatch({
    type: LOADING_START,
  });
};
export const loadingDone = (dispatch: Dispatch<MovieActions>) => {
  dispatch({
    type: LOADING_DONE,
  });
};
