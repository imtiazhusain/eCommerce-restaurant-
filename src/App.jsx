import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import Feature from "./components/Feature";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

export default function App() {
  return (
    <div className="font-popins">
      <Navbar />
      <HeroSection />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <BannerSection />
      <BlogSection />
      <NewsLetter />
      <Feature />
    </div>
  );
}
