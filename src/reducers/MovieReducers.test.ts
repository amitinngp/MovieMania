import { Movie } from "../model/Movie";
import { MovieReducers } from "./MovieReducers";
import {
  MovieActionType,
  RETRIEVE_MOVIES,
} from "../actions/Actions";

describe("#MovieReducers", () => {
  let movies: Movie[];
  let movie: Movie;
  let inititalMovieReducerState: Movie[];
  let movieAction: MovieActionType;

  beforeEach(() => {
    movies = [
      { Title: "Iron Man", imdbID: '1'},
      { Title: "Iron Man 2", imdbID: '2' },
      { Title: "Iron Man 3", imdbID: '3' },
    ];
    movie = { Title: "Iron Man", imdbID: '1', id: '1' };
  });

  describe("#RETRIEVE_MOVIES", () => {
    it("should chnage the state from empty [] to filled with datat [{},{},{}]!! ", () => {
      inititalMovieReducerState = [];
      movieAction = {
        type: RETRIEVE_MOVIES,
        movies: movies,
      };
      const changedState = MovieReducers(
        inititalMovieReducerState,
        movieAction
      );
      expect(changedState).toEqual(movies);
    });
  });
});
