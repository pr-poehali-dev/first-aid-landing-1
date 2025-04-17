import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EmergencySection from "@/components/EmergencySection";
import BasicsSection from "@/components/BasicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <EmergencySection />
        <BasicsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
