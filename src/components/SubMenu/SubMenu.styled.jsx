import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SubMenuWrapper = styled.div`
  padding: 20px 0 20px 0;
  border-bottom: 1px solid #000;
`;

const SubMenuTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 20px;
`;

const SubMenuList = styled.ul`
  display: inline-flex;
`;

const SubMenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const SubMenuLink = styled(NavLink)`
  font-weight: 500;
  letter-spacing: 0.03em;
  display: inline-block;
  padding: 10px;
  font-size: 18px;

  &:hover {
    color: #3134f1;
  }

  &.active {
    color: #3134f1;
  }
`;

export { SubMenuWrapper, SubMenuTitle, SubMenuList, SubMenuItem, SubMenuLink };