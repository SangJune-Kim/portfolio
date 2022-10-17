import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const Main = styled.ul`
  width: auto;
`;

const MenuWrapper = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  margin-right: 1rem;
  cursor: pointer;
`;

export default function Header(props) {
  const MenuData = ["About", "Skills", "Projects", "Career"];

  return (
    <Container>
      <Wrapper>
        <Main>
          <Menu>{`WalkingKim's portfolio`}</Menu>
        </Main>
        <MenuWrapper>
          {MenuData.map((el, i) => (
            <Menu key={i} onClick={props.onClickMenu(i)}>
              {el}
            </Menu>
          ))}
        </MenuWrapper>
      </Wrapper>
    </Container>
  );
}
