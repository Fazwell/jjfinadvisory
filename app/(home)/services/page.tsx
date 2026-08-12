import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesStatement from "@/components/services/ServicesStatement";
import EngagementModel from "@/components/services/EngagementModel";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesStatement />
      <EngagementModel />
      <ServicesCTA />
    </>
  );
}