import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationList = styled.ul`
  display: inline-flex;
`;

const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.03em;

  &:hover {
    color: #3134f1;
  }

  &.active {
    color: #3134f1;
  }
`;

export { NavigationList, NavigationItem, NavigationLink };
