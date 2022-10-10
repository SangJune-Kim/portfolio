import styled from "@emotion/styled";
import { ReactNode } from "react";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Body = styled.div`
  width: 100%;
`;

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <Body>{props.children}</Body>;
    </>
  );
}
