import HeroSection from "@/components/sections/HeroSection";
import LoveStory from "@/components/sections/LoveStory";
import BrideGroom from "@/components/sections/BrideGroom";
import WeddingEvents from "@/components/sections/WeddingEvents";
import PhotoGallery from "@/components/sections/PhotoGallery";
import VenueMap from "@/components/sections/VenueMap";
import FamilySection from "@/components/sections/FamilySection";
import Guestbook from "@/components/sections/Guestbook";
import FAQSection from "@/components/sections/FAQSection";
import GiftSection from "@/components/sections/GiftSection";
import RSVPSection from "@/components/sections/RSVPSection";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full overflow-hidden">
      <HeroSection />
      <BrideGroom />
      <LoveStory />
      <WeddingEvents />
      <PhotoGallery />
      <VenueMap />
      <FamilySection />
      <Guestbook />
      <FAQSection />
      <GiftSection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
