import PropTypes from "prop-types";
import {
  MovieCardWrapper,
  MovieCardImage,
  MovieCardTextWrapper,
  MovieCardText,
  MovieCardTitle,
  LowerLevelTitle,
} from "./MovieCard.styled";

function MovieCard({ movie }) {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w342";
  const imageStub = "https://i.ibb.co/4MnLhbM/sorry1.jpg";
  const unknownGenreName = "Common";

  return (
    <MovieCardWrapper>
      <MovieCardImage
        src={poster_path ? imageBaseUrl + poster_path : imageStub}
        alt={title}
      />
      <MovieCardTextWrapper>
        <MovieCardTitle>
          {title} ({release_date.slice(0, 4)})
        </MovieCardTitle>
        <MovieCardText>
          User score: <b>{vote_average * 10}%</b>
        </MovieCardText>
        <LowerLevelTitle>Overview</LowerLevelTitle>
        <MovieCardText>{overview}</MovieCardText>
        <LowerLevelTitle>Genres</LowerLevelTitle>
        <MovieCardText>
          {genres
            .map((genre) =>
              genre.name === genre?.name ? genre.name : unknownGenreName
            )
            .join(", ")}
        </MovieCardText>
      </MovieCardTextWrapper>
    </MovieCardWrapper>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
