import styled from "styled-components";

const CastList = styled.ul`
  margin-top: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const CastItem = styled.li`
  margin-top: 15px;
  margin-right: 15px;
  flex-basis: calc(100% / 3 - 15px);
`;

const CastText = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
`;

export { CastList, CastItem, CastText };
