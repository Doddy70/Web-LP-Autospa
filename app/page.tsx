import Navbar from "@/components/Navbar";
import KeyboardScroll from "@/components/KeyboardScroll";
import ServicesQuality from "@/components/ServicesQuality";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Reviews from "@/components/Reviews";
import OurTeam from "@/components/OurTeam";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero Section with Scrollytelling */}
      <KeyboardScroll />

      {/* Content Sections */}
      <ServicesQuality />
      <Gallery />
      <VideoGallery />
      <Reviews />
      <OurTeam />
      <GetInTouch />
      <Footer />
    </main>
  );
}
