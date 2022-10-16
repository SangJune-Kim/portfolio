import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export default function Career() {
  return (
    <Container>
      <Wrapper>Career</Wrapper>
    </Container>
  );
}
