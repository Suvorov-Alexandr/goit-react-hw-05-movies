import {
  useParams,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense, useRef } from "react";
import { getMovieById } from "../services/moviesApi";
import { TiArrowBack } from "react-icons/ti";
import Button from "../components/Button";
import MovieCard from "../components/MovieCard";
import SubMenu from "../components/SubMenu";
import Loader from "../components/Loader";

const Cast = lazy(() =>
  import("../components/Cast/Cast")
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews")
);

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const location = useRef(useLocation()?.state?.from ?? "/");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieById(params.movieId)
      .then((response) => setMovie(response))
      .finally(() => setIsLoading(false));
  }, [params.movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movie && (
        <>
          <Button onClick={() => navigate(location.current)}>
            <TiArrowBack />
            Go back
          </Button>
          <MovieCard movie={movie} />
          <SubMenu />
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;
