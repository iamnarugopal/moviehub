import "@/styles/globals.scss";
import Theme from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movi Hub</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
