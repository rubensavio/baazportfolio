import ClientNavbar from "../ClientNavbar/ClientNavbar";
import Hero from "../Hero/Hero";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import BrandsCarousel from "../BrandsCarousel/BrandsCarousel";
import OurExpertise from "../OurExpertise/OurExpertise";
import HowWeWork from "../HowWeWork/HowWeWork";
import Testimonials from "../Testimonials/Testimonials";
import CTA from "../CTA/CTA";
import HomeFaq from "../HomeFaq/HomeFaq";
import Footer from "../Footer/Footer";

export default function HomePageClient() {
  return (
    <div className="home">
      <ClientNavbar />
      <Hero />
      <WhoWeAre />
      <BrandsCarousel />
      <OurExpertise />
      <HowWeWork />
      <Testimonials />
      <CTA />
      <HomeFaq />
      <Footer />
    </div>
  );
}
