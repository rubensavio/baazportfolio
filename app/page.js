import HomePageClient from "../components/HomePageClient/HomePageClient";
import HomeFaqJsonLd from "../components/HomeFaqJsonLd";
import PageDatesJsonLd from "../components/PageDatesJsonLd";

export default function Home() {
  return (
    <>
      <PageDatesJsonLd
        path="/"
        name="Baaz - Product engineering &amp; custom software"
      />
      <HomeFaqJsonLd />
      <HomePageClient />
    </>
  );
}
