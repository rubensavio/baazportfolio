import ContactPageClient from "../../components/ContactPageClient/ContactPageClient";
import PageDatesJsonLd from "../../components/PageDatesJsonLd";

export default function GetInTouch() {
  return (
    <>
      <PageDatesJsonLd path="/get-in-touch" name="Get in touch" />
      <ContactPageClient />
    </>
  );
}
