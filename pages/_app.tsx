import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, ILayoutProps } from "components/layout";

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;

  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;