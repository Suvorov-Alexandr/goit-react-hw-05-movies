import styled from "styled-components";

const FilmsList = styled.ul`
  list-style-type: disclosure-closed;
  list-style-position: inside;
  column-count: 3;
`;

const FilmsItem = styled.li`
  font-size: 18px;
  line-height: 24px;
  transition: color 250ms ease;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    color: #3134f1;
  }
`;

export { FilmsList, FilmsItem };
