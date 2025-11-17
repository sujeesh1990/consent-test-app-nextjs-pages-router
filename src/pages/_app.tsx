import { useEffect } from 'react'
import { Router } from 'next/router'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
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
        src="https://consent.app.relyancestage.xyz/relyance-agent.js"
        data-relyance-consent-appId="app-8b88aca7-13d2-528c-99de-ddcbd55dde01"
        data-relyance-zero-fire-mode="true"
        strategy="afterInteractive"
      />
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
      <Component {...pageProps} />
    </>
  );
}
