import {
  SubMenuWrapper,
  SubMenuTitle,
  SubMenuList,
  SubMenuItem,
  SubMenuLink,
} from "./SubMenu.styled";
import * as Scroll from "react-scroll";

const scroll = Scroll.animateScroll;

function ScrollDown() {
  scroll.scrollToBottom();
}

function SubMenu() {
  return (
    <SubMenuWrapper>
      <SubMenuTitle>Additional information</SubMenuTitle>
      <SubMenuList>
        <SubMenuItem>
          <SubMenuLink onClick={ScrollDown} to="cast">
            Cast
          </SubMenuLink>
        </SubMenuItem>
        <SubMenuItem>
          <SubMenuLink onClick={ScrollDown} to="reviews">
            Reviews
          </SubMenuLink>
        </SubMenuItem>
      </SubMenuList>
    </SubMenuWrapper>
  );
}

export default SubMenu;
