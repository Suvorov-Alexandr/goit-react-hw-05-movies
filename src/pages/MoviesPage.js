import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getMoviesBySearchQuery } from "../services/moviesApi";
import MoviesList from "../components/MoviesList";
import Searchbar from "../components/Searchbar";
import Loader from "../components/Loader";

function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMoviesBySearchQuery(searchQuery)
      .then(setMovies)
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  return (
    <div>
      <Searchbar />
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
