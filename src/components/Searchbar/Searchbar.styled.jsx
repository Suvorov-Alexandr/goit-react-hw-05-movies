import styled from "styled-components";

const Form = styled.form`
  width: fit-content;
  block-size: fit-content;
  margin: 0 auto 30px auto;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  border-radius: 7px;
  margin-right: 10px;
  outline: none;
  transition: border 250ms linear;
  border: 1px solid #60f38c;

  &:focus {
    border: 1px solid #3134f1;
    box-shadow: 0px 0px 5px 5px #fff;
  }
`;

export { Form, Input };
