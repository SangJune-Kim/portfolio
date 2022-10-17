import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export default function Projects(props) {
  return (
    <Container ref={(el) => (props.toScroll.current[2] = el)}>
      <Wrapper>Projects</Wrapper>
    </Container>
  );
}
