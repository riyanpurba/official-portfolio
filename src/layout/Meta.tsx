import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo, SocialProfileJsonLd } from "next-seo";

import { AppConfig } from "@/utils/AppConfig";

type IMetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta name="theme-color" content="#ffffff" key="theme-color" />
        <meta name="keywords" content={AppConfig.keywords} key="keywords" />
        <meta name="author" content={AppConfig.author} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content={AppConfig.google_site_verification} />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
        <link rel="canonical" href={AppConfig.canonical} />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: AppConfig.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          type: 'website',
          images: [
            {
              url: `${router.basePath}${AppConfig.image}`,
              width: 1200,
              height: 630,
              alt: props.title
            }
          ]
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name={AppConfig.author}
        url={AppConfig.canonical}
        sameAs={[
          "https://www.instagram.com/riyanpurba/",
          "https://linkedin.com/in/riyanpurba",
          "https://github.com/riyanpurba"
        ]}
        jobTitle="Front-End Developer"
      />
    </>
  )
};

export { Meta };