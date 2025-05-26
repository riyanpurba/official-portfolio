/* eslint-disable @next/next/inline-script-id */
import '@/styles/global.css'
import TagManager from 'react-gtm-module';
import type { AppProps } from 'next/app';
import { AppConfig } from '@/utils/AppConfig';
import GoogleAnalytics from '@/utils/GoogleAnalytics';
import { useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: AppConfig.GTM });
  }, []);
  return(
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
    )
  }

export default MyApp;