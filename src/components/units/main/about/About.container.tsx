import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  background-color: skyblue;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  opacity: 0;
  transition: all 1s ease-in-out;

  &.isActive {
    opacity: 1;
  }
`;

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Container>
      <Wrapper ref={ref} className={inView ? "isActive" : ""}>
        ABOUT
      </Wrapper>
    </Container>
  );
}
