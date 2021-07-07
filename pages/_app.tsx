import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { PrefersContext, themes, ThemeType } from '../libs/use-prefers';
import Header from '../components/header';
import '../styles/global.css';


const SerumApp = ({ Component, pageProps }: AppProps) => {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  useEffect(() => {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');

    const theme = window.localStorage.getItem('theme') as ThemeType;
    if (themes.includes(theme)) setThemeType(theme);
  }, []);

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme);
    if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem('theme', theme);
  }, []);

  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <title>Serum Studio</title>
        <meta name="og:url" content="https://serum.studio" />
        <meta name="og:title" content="Serum Studio" />
        <meta name="og:description" content="We build, design and innovate. Our main priority is to give high-quality products for free with ease!" />
        <meta name="description" content="We build, design and innovate. Our main priority is to give high-quality products for free with ease!" />

      
        <meta name="twitter:title" content="Serum Studio" />
        <meta name="twitter:description" content="We build, design and innovate. Our main priority is to give high-quality products for free with ease!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/preview.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PrefersContext.Provider value={{ themeType, switchTheme }}>
          <Header />
          <Component {...pageProps} />
        </PrefersContext.Provider>
      </GeistProvider>
    </>
  );
};

export default SerumApp;