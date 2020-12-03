import { LOADING_START, LOADING_DONE, MovieActionType } from "../actions/Actions";

export interface  LoadingDataProps{
 loading : boolean;
}

const inititalLoadingState: LoadingDataProps = {loading :false};

const loadingReducer = (
  // eslint-disable-next-line no-unused-vars
  _movieState = inititalLoadingState,
  movieAction: MovieActionType
): LoadingDataProps => {
  switch (movieAction.type) {
    case LOADING_START:
      return {loading :true};
    case LOADING_DONE:
      return {loading :false};
    default:
      return {loading :false};
  }
};

export { loadingReducer as LoadingReducer };