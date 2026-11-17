import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCoverage from "@/components/ServiceCoverage";
import Services from "@/components/Services";
import TourPackages from "@/components/TourPackages";
import TourGallery from "@/components/TourGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ServiceCoverage />
      <Fleet />
      <TourPackages />
      <TourGallery />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}
