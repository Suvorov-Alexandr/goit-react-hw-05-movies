import PropTypes from "prop-types";
import { ReviewTitle, ReviewText } from "./Review.styled";

function Review({ reviews }) {
  const { author, content } = reviews;
  return (
    <div>
      <ReviewTitle>Author: {author}</ReviewTitle>
      <ReviewText>{content}</ReviewText>
    </div>
  );
}

Review.propTypes = {
  reviews: PropTypes.object.isRequired,
};

export default Review;
