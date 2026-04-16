import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";
import WhoWeAreSection from "../../components/WhoWeAreSection/WhoWeAreSection";
import OurValues from "../../components/OurValues/OurValues";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import FAQ from "../../components/FAQ/FAQ";
import { ABOUT_FAQ_ITEMS } from "../../lib/aboutFaq";
import "./page.scss";

export default function AboutUs() {
  return (
    <div className="about-us">
      <ClientNavbar />
      <header className="about-us-header" aria-label="About Baaz">
        <h1 className="about-us-title">About Us</h1>
      </header>
      <WhoWeAreSection />
      <OurValues />
      <FAQ faqs={ABOUT_FAQ_ITEMS} heading="About Baaz — common questions" />
      <CTA />
      <Footer />
    </div>
  );
}
