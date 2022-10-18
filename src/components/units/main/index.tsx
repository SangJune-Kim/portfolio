import styled from "@emotion/styled";
import { useRef, useState } from "react";
import Footer from "../../commons/layout/footer/indes";
import Header from "../../commons/layout/header";
import About from "./about/About.container";
import Career from "./career/Career.container";
import Projects from "./projects/Projects.container";
import Skills from "./skills/Skills.container";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Main() {
  const toScroll = useRef<Array<HTMLDivElement>>([]);

  const onClickHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onClickMenu = (i) => () => {
    toScroll.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header
        toScroll={toScroll}
        onClickMenu={onClickMenu}
        onClickHome={onClickHome}
      />
      <Container>
        <About toScroll={toScroll} onClickMenu={onClickMenu} />
        <Skills toScroll={toScroll} onClickMenu={onClickMenu} />
        <Projects toScroll={toScroll} onClickMenu={onClickMenu} />
        <Career toScroll={toScroll} onClickMenu={onClickMenu} />
      </Container>
      <Footer />
    </>
  );
}
