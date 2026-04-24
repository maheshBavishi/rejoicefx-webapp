import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/mixins/index.scss";
import "atropos/css";

import Head from "next/head";
import Wrapper from "@/components/wrapper";
import { AppProvider } from "../context/AppContext";
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>GENXEL : Turnkey Services For Forex | Forex CRM, Licensing, and Algo Trading Solutions</title>
        <meta name="description" content="Start and scale your Forex brokerage with GENXEL. We specialize in Forex CRM, brokerage licensing, algorithmic trading software, and a marketplace for innovative trading strategies." />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </AppProvider>
  );
}
