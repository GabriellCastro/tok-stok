/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tok&Stok</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
