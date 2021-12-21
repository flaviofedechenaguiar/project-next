import "../styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Gazin Films</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
