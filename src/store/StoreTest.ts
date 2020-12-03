import { createStore, applyMiddleware } from "redux";
import { rootReducer, MovieState } from "./ConfigureStore";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { MovieActions } from "../actions/Actions";

export const movieTestStore = (defaultMovieState: MovieState) => {
  const createStoreWithMiddleware = applyMiddleware(
    thunk as ThunkMiddleware<MovieState, MovieActions>
  )(createStore);
  return createStoreWithMiddleware(rootReducer, defaultMovieState);
};
