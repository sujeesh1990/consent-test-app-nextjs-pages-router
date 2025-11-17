import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Script
        id="relyance-consent-agent"
        src="https://consent.app.relyancestage.xyz/relyance-agent.js"
        data-relyance-consent-appId="app-8b88aca7-13d2-528c-99de-ddcbd55dde01"
        data-relyance-zero-fire-mode="true"
        strategy="afterInteractive"
      />
    </>
  );
}
