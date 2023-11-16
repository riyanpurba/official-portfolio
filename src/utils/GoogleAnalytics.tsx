/* eslint-disable no-undef */
//components/GoogleAnalytics.tsx
import { useRouter } from "next/router";
import Script from "next/script";
import { memo, useEffect } from "react";
import { AppConfig } from "./AppConfig";
const GoogleAnalytics = () => {
  const router = useRouter();
  // 👇 send page views when users gets to the landing page
  useEffect(() => {
    if (!AppConfig.GA || router.isPreview) return;
    gtag("config", AppConfig.GA, {
      send_page_view: false, //manually send page views to have full control
    });
    gtag("event", "page_view", {
      page_path: window.location.pathname,
      send_to: AppConfig.GA,
    });
  }, []);
  // 👇 send page views on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!AppConfig.GA || router.isPreview) return;
      // manually send page views
      gtag("event", "page_view", {
        page_path: url,
        send_to: AppConfig.GA,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events, router.isPreview]);
  // 👇 prevent rendering scripts if there is no AppConfig.GA or if it's preview mode.
  if (!AppConfig.GA || router.isPreview) {
    return null;
  }
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AppConfig.GA}`}
      ></Script>
      {/* 👇 gtag function definition. notice that we don't send page views at this point.  */}
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
        }}
      />
    </>
  );
};
export default memo(GoogleAnalytics);

