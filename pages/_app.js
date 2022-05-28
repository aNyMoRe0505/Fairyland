/* eslint-disable react/prop-types */
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { createGlobalStyle } from 'styled-components';

import GoTop from '@/components/GoTop';
import clarityInitScript from '@/tracking/clarity';

import SharedLayout from '../components/SharedLayout';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Noto Sans TC', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Fairyland Info" />
        <title>Fairyland Info</title>
      </Head>
      {process.env.NODE_ENV === 'production' && (
        <Script
          id="clarity-js"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: clarityInitScript }}
        />
      )}
      <GoTop />
      <SharedLayout>
        <Component {...pageProps} />
      </SharedLayout>
    </>
  );
}

export default MyApp;
