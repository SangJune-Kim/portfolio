import styled from "@emotion/styled";
import About from "./about/About.container";
import Career from "./career/Career.container";
import Projects from "./projects/Projects.container";
import Skills from "./skills/Skills.container";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  & > div {
    scroll-snap-align: start;
    height: 100vh;
  }
`;

export default function Main() {
  return (
    <>
      <Container>
        <About />
        <Skills />
        <Projects />
        <Career />
      </Container>
    </>
  );
}
