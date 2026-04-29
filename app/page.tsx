import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import DeliverySection from "@/components/DeliverySection";
import OrderForm from "@/components/OrderForm";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <DeliverySection />
        <OrderForm />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
