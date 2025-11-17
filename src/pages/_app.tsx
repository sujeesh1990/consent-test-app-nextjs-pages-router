import { useEffect } from 'react'
import ReactGA from 'react-ga4';
import { useRouter } from 'next/router'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();


  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }
    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: 'pageview', page: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      defaults: '2025-05-24',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
  }, [])
  return (
    <>
      <Script
        id="relyance-consent-agent"
        src={process.env.NEXT_PUBLIC_RELYANCE_SRC}
        data-relyance-consent-appId={process.env.NEXT_PUBLIC_RELYANCE_APPID}
        data-relyance-zero-fire-mode={process.env.NEXT_PUBLIC_RELYANCE_ZERO_FIRE_MODE}
        strategy="beforeInteractive"
      />
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
    </>
  );
}
