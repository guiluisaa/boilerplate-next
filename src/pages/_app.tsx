import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp: FC<AppProps> = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <title>Boilerplate Next</title>
    </Head>

    <Component {...pageProps} key={router.route} />
  </>
);

export default CustomApp;
