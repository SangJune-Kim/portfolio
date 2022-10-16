/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export default function Skills() {
  return (
    <Container>
      <Wrapper>Skills</Wrapper>
    </Container>
  );
}
