import styled from "@emotion/styled";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Body = styled.div`
  width: 100%;
`;

export default function Layout(props: LayoutProps) {
  return <Body>{props.children}</Body>;
}
