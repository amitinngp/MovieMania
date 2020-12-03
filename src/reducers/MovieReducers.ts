import {
  MovieActionType,
  RETRIEVE_MOVIES,
  RETRIEVE_MOVIE_DETAILS,
} from "../actions/Actions";
import { Movie } from "../model/Movie";

const inititalMovieReducerState: Movie[] | number = [];

const movieReducers = (
  movieState = inititalMovieReducerState,
  movieAction: MovieActionType
): Movie[] => {
  switch (movieAction.type) {
    case RETRIEVE_MOVIES:
      return [...movieAction.movies];
    case RETRIEVE_MOVIE_DETAILS:
      {
        const value = movieState.map((movie) => {
          if (movie.imdbID === movieAction.id) {
            return movieAction.movie;
          } else {
            return movie;
          }
        });
        return value;
      }
    default:
      return movieState;
  }
};

export { movieReducers as MovieReducers };
