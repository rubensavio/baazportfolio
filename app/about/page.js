import AboutPageClient from "../../components/AboutPageClient/AboutPageClient";
import PageDatesJsonLd from "../../components/PageDatesJsonLd";

export default function AboutUs() {
  return (
    <>
      <PageDatesJsonLd path="/about" name="About Baaz" />
      <AboutPageClient />
    </>
  );
}
