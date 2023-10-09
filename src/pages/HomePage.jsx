import {
  CtaSection,
  HeroSection,
  ProductSlider,
  RecommendedProducts,
} from "../components";

export default function HomePage() {
  return (
    <main className="text-gray-100">
      <HeroSection />
      <RecommendedProducts />
      <ProductSlider />
      <CtaSection />
    </main>
  );
}
