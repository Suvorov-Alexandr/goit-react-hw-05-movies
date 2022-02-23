import styled from "styled-components";

const MovieCardWrapper = styled.div`
  display: flex;
`;

const MovieCardImage = styled.img`
  width: 300px;
`;

const MovieCardTextWrapper = styled.div`
  margin-left: 50px;
`;

const MovieCardText = styled.p`
  margin: 0 0 20px 0;
`;

const MovieCardTitle = styled.h2`
  margin-bottom: 20px;
`;

const LowerLevelTitle = styled.h3`
  margin-bottom: 20px;
`;

export {
  MovieCardWrapper,
  MovieCardImage,
  MovieCardTextWrapper,
  MovieCardText,
  MovieCardTitle,
  LowerLevelTitle,
};
