import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 60rem;
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

// Top button
export const TopButton = styled.button`
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  right: 0;
  bottom: 0;
  transform: translate(-20%, -20%);
  width: 4rem;
  height: 4rem;
  background: #0fbaa3;
  border-radius: 50%;
  border: none;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.1em;
  cursor: pointer;
  span {
    padding-top: 0.5rem;
  }
`;

const TopBtnImg = styled.img`
  height: 1.31rem;
  width: auto;
`;

export default function Career(props) {
  const onClickTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container ref={(el) => (props.toScroll.current[3] = el)}>
      <Wrapper>Career</Wrapper>
      <TopButton onClick={onClickTopButton}>
        <TopBtnImg src="/img/icon-top-arrow.svg" />
        <span>TOP</span>
      </TopButton>
    </Container>
  );
}
