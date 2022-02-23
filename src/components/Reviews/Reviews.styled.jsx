import styled from "styled-components";

const ReviewsList = styled.ul`
  padding: 30px 0;
`;

const ReviewsItem = styled.li`
  padding: 0 20px;
  border-radius: 15px;
  border: 1px solid black;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ReviewsText = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
`;

export { ReviewsList, ReviewsItem, ReviewsText };
