import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { getMovieRewiews } from "../../services/moviesApi";
import { FaSadTear } from "react-icons/fa";
import { ReviewsList, ReviewsItem, ReviewsText } from "./Reviews.styled";
import Review from "./Review";
import Loader from "../Loader";

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieRewiews(params.movieId)
      .then((response) => setReviews(response))
      .finally(() => setIsLoading(false));
  }, [params.movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews && (
        <>
          {reviews?.length === 0 ? (
            <div>
              <ReviewsText>
                Sorry, we don't have any reviews for this movie <FaSadTear />
              </ReviewsText>
            </div>
          ) : (
            <ReviewsList>
              {reviews.map((review) => (
                <ReviewsItem key={review.id}>
                  <Review reviews={review} />
                </ReviewsItem>
              ))}
            </ReviewsList>
          )}
        </>
      )}
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.object,
};

export default Reviews;
