import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  background-color: yellow;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`;

export default function Skills() {
  return (
    <Container>
      <Wrapper>Skills</Wrapper>
    </Container>
  );
}
