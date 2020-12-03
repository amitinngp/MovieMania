import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovie} from "../../actions/ActionCreator";
import { Link } from "react-router-dom";
import { Movie } from "../../model/Movie";
import './CardContent.css';


// some of the variable is not camel cased as to match with API response.
interface CardContentProps {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
  data: Movie[] | undefined;
}

const CardContent: React.FC<CardContentProps> = ({ data }:{data:Movie[] | undefined}) => {
  const dispatch = useDispatch();
  const handlerPosterClick = (imdbID:string |undefined) => {
    dispatch(fetchMovie(imdbID));
  };
  return (
    <div className="content-holder">
      {data ? (
        data.map((movie: Movie) => {
          return (
            <React.Fragment key={movie.imdbID}>
              <Link to={{ pathname: `/details/${movie.imdbID}`}}>
                <div
                  onClick={() =>
                    handlerPosterClick(movie.imdbID)
                  }
                >
                  <div className="content-container">
                    <div>
                      <img
                        data-test="content-poster"
                        className="content-poster"
                        src={
                          movie.Poster !== "N/A"
                            ? movie.Poster
                            : `${process.env.PUBLIC_URL}/assets/404.png`
                        }
                        alt="Poster"
                      />
                    </div>
                    <div data-test="content-title" className="content-title">
                      {movie.Title}
                    </div>
                    <div data-test="content-Year" className="content-Year">
                      {movie.Year}
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })
      ) : (
        <div>
          <span>Loading Data</span>
        </div>
      )}
    </div>
  );
};
export default CardContent;
