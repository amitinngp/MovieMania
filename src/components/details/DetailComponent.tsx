import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MovieState } from "../../store/ConfigureStore";
import { fetchMovie } from "../../actions/ActionCreator";
import { useSelector } from "react-redux";
import HeaderBar from "../header/HeaderBar";
import "./DetailsComponent.css";
import LoadingHandler from "../LoadingHandler";

interface DetailComponentProps {
  match?: { params: { id: string } };
}

const DetailComponent: React.FC<DetailComponentProps> = ({
  match = { params: { id: "" } },
}) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  let statusofLoading =  useSelector((state:MovieState) => state.isLoading);
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);
  const movie = useSelector((state: MovieState) => {
    const value = state.movies.filter((movie) => movie.imdbID === id);
    return value[0];
  });
  statusofLoading =  useSelector((state:MovieState) => state.isLoading);

  return  movie ?
    (
    <React.Fragment>
      <div className="container">
        <HeaderBar />
        <div className="details-container">
          <div className="poster-group">
            <img
              data-test="details-poster"
              className="details-poster"
              src={
                movie.Poster !== "N/A" ? movie.Poster : `${process.env.PUBLIC_URL}/assets/404.png`
              }
              alt="Poster"
            />
            <div className="detail-group">
              <div className="loading-status">{statusofLoading.loading && <LoadingHandler/>}</div>
              <div data-test="details-title" className="details-title">
                {movie.Title}
              </div>
              <div data-test="details-Year" className="details-Year">
                {movie.Year}
              </div>
              <div data-test="details-Actors" className="details-Actors">
                {movie.Actors}
              </div>
              <div data-test="details-Plot" className="details-Plot">
                {movie.Plot}
              </div>
              <div data-test="details-Genre" className="details-Genre">
                {movie.Genre}
              </div>
              <div data-test="details-Director" className="details-Director">
                {movie.Director}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ):(<div className="details-container">Error Occured!!</div>)
};
export default DetailComponent;
