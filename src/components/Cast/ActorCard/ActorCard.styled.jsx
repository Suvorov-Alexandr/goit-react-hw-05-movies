import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  border: 1px solid black;
`;

const Image = styled.img`
  width: 100px;
`;

const TextWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 0 0 10px 0;
`;

export { Wrapper, TextWrapper, Text, Image };
