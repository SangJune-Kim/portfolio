import About from "../src/components/units/about/About.container";
import Archiving from "../src/components/units/archiving/Archiving.container";
import Career from "../src/components/units/career/Career.container";
import Projects from "../src/components/units/projects/Projects.container";
import Skills from "../src/components/units/skills/Skills.container";

export default function Home() {
  return (
    <>
      <About />
      <Archiving />
      <Career />
      <Projects />
      <Skills />
    </>
  );
}
