import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
