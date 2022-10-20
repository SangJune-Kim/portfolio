import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9c51d;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 5rem;
  border-bottom: 5px solid gray;
  cursor: pointer;
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SkillTypeWrapper = styled.div`
  width: 15rem;
  height: 40rem;
  background-color: white;
  margin-right: 10em;
  :last-of-type {
    margin: 0;
  }
`;

const SkillTypeTitle = styled.div`
  border-bottom: 1px solid gray;
`;

export default function Skills(props) {
  return (
    <Container ref={(el) => (props.toScroll.current[1] = el)}>
      <Wrapper>
        <Title onClick={props.onClickMenu}>Skills</Title>
      </Wrapper>
      <SkillWrapper>
        <SkillTypeWrapper>
          <SkillTypeTitle>Frontend</SkillTypeTitle>
        </SkillTypeWrapper>
        <SkillTypeWrapper>
          <SkillTypeTitle>Backend</SkillTypeTitle>
        </SkillTypeWrapper>
        <SkillTypeWrapper>
          <SkillTypeTitle>Deployment</SkillTypeTitle>
        </SkillTypeWrapper>
        <SkillTypeWrapper>
          <SkillTypeTitle>Communication</SkillTypeTitle>
        </SkillTypeWrapper>
      </SkillWrapper>
    </Container>
  );
}
