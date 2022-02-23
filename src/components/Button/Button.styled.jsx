import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  width: 90px;
  height: 30px;
  border-radius: 7px;
  border-color: #60f38c;
  font-size: 14px;
  background-color: white;

  &:hover {
    background-color: #60f38c;
    box-shadow: 0px 0px 5px 5px #fff;
  }
`;

export default Button;
