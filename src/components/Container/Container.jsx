import PropTypes from "prop-types";
import { Wrapper } from "./Container.styled";

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Container;
