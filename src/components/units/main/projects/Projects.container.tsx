import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  background-color: green;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export default function Projects() {
  return (
    <Container>
      <Wrapper>asdfs</Wrapper>
    </Container>
  );
}