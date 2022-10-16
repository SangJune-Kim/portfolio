import styled from "@emotion/styled";

const Container = styled.div`
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

// // Top button
// export const TopButton = styled.button`
//   z-index: 999;
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   right: 0;
//   bottom: 0;
//   transform: translate(-20%, -20%);
//   width: 4rem;
//   height: 4rem;
//   background: #0fbaa3;
//   border-radius: 50%;
//   border: none;
//   color: #ffffff;
//   font-weight: 600;
//   letter-spacing: 0.1em;
//   cursor: pointer;

//   img {
//     height: 1.31rem;
//     width: auto;
//   }

//   span {
//     padding-top: 0.5rem;
//   }
// `;

export default function Projects() {
  // const onClickTopButton = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <Container>
      <Wrapper>Projects</Wrapper>
      {/* <TopButton onClick={onClickTopButton}>
        <img src="/img/icon-top-arrow.svg" />
        <span>TOP</span>
      </TopButton> */}
    </Container>
  );
}
