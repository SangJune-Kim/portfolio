import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "돋움", sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    :visited {
      color: #000000;
    }
  }
`;
