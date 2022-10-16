import styled from "@emotion/styled";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/img/beach.JPG");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 1s ease-in-out;
  background-color: rgba(244, 244, 244, 0.5);
  &.isActive {
    opacity: 1;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 4rem;

  > h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  > h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  > p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    :last-of-type {
      margin: 0;
    }
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const AboutCol = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;
  :last-of-type {
    margin-right: 0;
  }
`;

const Icon = styled.img`
  width: 2.5rem;
  cursor: pointer;
`;

const IconLabel = styled.li`
  margin-top: 0.5rem;
`;

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Container>
      <Wrapper ref={ref} className={inView ? "isActive" : ""}>
        <IntroWrapper>
          <h1>김상준</h1>
          <h2>웹 개발자 포트폴리오</h2>
          <p>
            새로운 경험과 배움을 즐기고 사용자를 위한 이유있는 코드, 로직,
            기획을 지향합니다.
          </p>
          <p>직관적이고 사용하기 편한 서비스를 목표로 합니다.</p>
        </IntroWrapper>
        <AboutWrapper>
          <AboutBox>
            <AboutCol>
              <Icon src="https://cdn-icons-png.flaticon.com/512/597/597177.png" />
              <IconLabel>010-2250-1806</IconLabel>
            </AboutCol>
            <AboutCol>
              <Icon src="https://cdn-icons-png.flaticon.com/512/2099/2099199.png" />
              <IconLabel>ghfnsgldl@gmail.com</IconLabel>
            </AboutCol>
          </AboutBox>
          <AboutBox>
            <AboutCol>
              <Link href="https://github.com/SangJune-Kim?tab=repositories">
                <Icon src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              </Link>
            </AboutCol>
            <AboutCol>
              <Link href="https://walkingkim.tistory.com/">
                <Icon src="https://cdn-icons-png.flaticon.com/512/254/254385.png" />
              </Link>
            </AboutCol>
            <AboutCol>
              <Link href="https://walkingkim.notion.site/Resume-72c9da15677d4075929af633ec050b90">
                <Icon src="https://cdn-icons-png.flaticon.com/512/4212/4212312.png" />
              </Link>
            </AboutCol>
          </AboutBox>
        </AboutWrapper>
      </Wrapper>
    </Container>
  );
}
