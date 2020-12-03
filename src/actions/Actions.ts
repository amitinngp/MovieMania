import { Movie } from "../model/Movie";


export const LOADING_START = "LOADING_START";
export const LOADING_DONE = "LOADING_DONE";
export const RETRIEVE_MOVIES = "RETRIEVE_MOVIES";
export const RETRIEVE_MOVIE_DETAILS = "RETRIEVE_MOVIE_DETAILS";
export const RETRIEVE_DETAILS = "RETRIEVE_DETAILS";


export interface RetriveMoviesAction {
    type: typeof RETRIEVE_MOVIES;
    movies: Movie[];
}

export interface RetriveMovieDetailsAction {
    type: typeof RETRIEVE_MOVIE_DETAILS;
    movie:Movie;    
    id: string | undefined;
}

export interface LoadingStart{
    type: typeof LOADING_START
    isloading?:boolean
}
export interface LoadingDone{
    type: typeof LOADING_DONE
    isloading?:boolean
}
export type MovieActionType = RetriveMoviesAction | RetriveMovieDetailsAction | LoadingStart |LoadingDone

export type MovieActions = MovieActionType;

