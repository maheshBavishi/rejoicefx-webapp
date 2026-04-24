import Head from "next/head";
import NewsPage from "@/renderning/news";

export default function News() {
  return (
    <>
      <Head>
        <title>News & Economic Calendar | RejoiceFX</title>
        <meta name="description" content="Stay ahead of the markets with real-time insights into the events that move prices." />
      </Head>
      <NewsPage />
    </>
  );
}
