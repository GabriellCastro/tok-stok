/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import '../styles/globals.css';

import { Provider } from '../context/Provider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tok&Stok</title>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
