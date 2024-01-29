import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { SettingsProvider } from "@/context/setting-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SettingsProvider>
  );
}
