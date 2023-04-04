import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DivSlider from "@/components/widgets/DivSlider";
import Videos from "@/components/widgets/Videos";
import Outcome from "@/components/widgets/Outcome";

export default function Home() {
  return (
    <>
      <main className=" bg-white">
        {/* Navbar */}
        <Header />
        {/* Hero Section */}
        <Hero />
        {/* Core Tracks */}
        <CoreTracks />
        {/* Videos */}
        <Videos />
        {/* Images */}
        {/* <ImageCarousel /> */}
        <DivSlider />
        {/* Program Outcome */}

        <Outcome />
        <Footer />
      </main>
    </>
  )
}
