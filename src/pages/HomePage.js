import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/moviesApi";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getTrendingMovies(1)
      .then((response) => setMovies(response))
      .catch((response) => console.log(response))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {movies && !isLoading && <MoviesList movies={movies} />}
    </>
  );
}

export default HomePage;
