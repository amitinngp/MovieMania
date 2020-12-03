import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../actions/ActionCreator";
import { MovieState } from "../../store/ConfigureStore";
import LoadingHandler from "../LoadingHandler";

export interface SearchComponentProps {}
const SearchComponent: React.FC<SearchComponentProps> = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  let statusofLoading = useSelector((state: MovieState) => state.isLoading);

  useEffect(() => {
    if (searchValue !== "") {
      dispatch(fetchMovies(searchValue));
    }
  }, [dispatch, searchValue]);

  statusofLoading = useSelector((state: MovieState) => state.isLoading);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.replace(/[^\w\s]/gi, ""));
  };

  return (
    <React.Fragment>
      <div className="search-section" data-test="search-section">
        <div className="search-input" data-test="search-input">
          <input type="text" value={searchValue} onChange={onChange} />
          <div className="loading-status">
            {statusofLoading.loading && <LoadingHandler />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SearchComponent;
