import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { MovieActions } from "../actions/Actions";
import { MovieReducers } from "../reducers/MovieReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoadingReducer } from "../reducers/LoadingReducer";

export const rootReducer = combineReducers({
  movies: MovieReducers,
  isLoading:LoadingReducer
});

export type MovieState = ReturnType<typeof rootReducer>;

export const movieStore = createStore<MovieState, MovieActions, {}, {}>(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<MovieState, MovieActions>)
  )
);
