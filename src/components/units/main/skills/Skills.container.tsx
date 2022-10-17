import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9c51d;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
  border-bottom: 5px solid gray;
  cursor: pointer;
`;

export default function Skills(props) {
  return (
    <Container ref={(el) => (props.toScroll.current[1] = el)}>
      <Wrapper>
        <Title onClick={props.onClickMenu}>Skills</Title>
      </Wrapper>
    </Container>
  );
}
