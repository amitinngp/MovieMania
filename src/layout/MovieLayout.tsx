import React, {  Suspense } from "react";
import "./MovieLayout.css";
import { MovieState } from "../store/ConfigureStore";
import {useSelector } from "react-redux";
import HeaderBar from "../components/header/HeaderBar";
import MovieCard from "../components/card/MovieCard";
import CardContent from "../components/card/CardContent";
import SearchComponent from "../components/search/SearchComponent";


interface MovieLayoutProps {}

export type MovieProps = MovieLayoutProps;

const MovieLayout: React.FC<MovieProps> = () => {

const movies = useSelector((state: MovieState) => state.movies);

  return (
    <div>
      <div className="container">
        <div className="header-container">
          <HeaderBar />
        </div>
        <div className="search-section">
          <SearchComponent />
        </div>
        <div className="movie-list-container">
          <div>
            <div>
              <Suspense fallback={<div>loading...</div>}>
                <MovieCard content={<CardContent data={movies} />} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieLayout;
