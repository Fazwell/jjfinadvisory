import PricingHero from "@/components/pricing/PricingHero";
import PricingApproach from "@/components/pricing/PricingApproach";
import PricingServices from "@/components/pricing/PricingServices";
import PricingFactors from "@/components/pricing/PricingFactors";
import PricingCTA from "@/components/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingApproach />
      <PricingServices />
      <PricingFactors />
      <PricingCTA />
    </>
  );
}