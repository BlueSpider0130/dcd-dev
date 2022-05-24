import "../styles/globals.css";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { useEffect } from "react";
const {} = dynamic(import("tw-elements"), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
