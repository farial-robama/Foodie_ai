import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import Chefspotlightsection from "@/components/sections/Chefspotlightsection";
import HowItWorks from "@/components/sections/HowItWorks";
import StatsSection from "@/components/sections/StatsSection";
import TopRatedSection from "@/components/sections/TopRatedSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CTASection from "@/components/sections/CTASection";
import CuisineMarquee from "@/components/sections/Cuisinemarquee";
import Faqsection from "@/components/sections/Faqsection";
import Popularcitiessection from "@/components/sections/Popularcitiessection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      <Chefspotlightsection />
      <HowItWorks />
      <CuisineMarquee />
      <Popularcitiessection />
      <StatsSection />
      <TopRatedSection />
      <TestimonialsSection />
      <BlogPreview />
      <Faqsection />
      <NewsletterSection />
      <CTASection />
    </main>
  );
}