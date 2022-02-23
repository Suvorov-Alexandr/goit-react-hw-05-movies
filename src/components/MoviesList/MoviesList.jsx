import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { FilmsList, FilmsItem } from "./MoviesList.styled";

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <FilmsList>
      {movies.map((movie) => {
        const { id, original_title } = movie;

        return (
          <FilmsItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </FilmsItem>
        );
      })}
    </FilmsList>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MoviesList;
