import {
    BriefcaseBusiness,
    GraduationCap,
    Lightbulb,
    Scale,
  } from "lucide-react";
  
  export const services = [
    {
      number: "01",
      title: "Business Process Outsourcing",
      shortTitle: "BPO",
      description:
        "Streamline your operations by outsourcing essential business processes to a professional and reliable partner.",
      icon: BriefcaseBusiness,
      href: "/services#bpo",
    },
    {
      number: "02",
      title: "Consultancy",
      shortTitle: "Consultancy",
      description:
        "Practical consulting support designed to help organizations address challenges, improve performance, and pursue opportunities.",
      icon: Lightbulb,
      href: "/services#consultancy",
    },
    {
      number: "03",
      title: "Advisory",
      shortTitle: "Advisory",
      description:
        "Strategic insight and professional guidance to help leaders make informed decisions and navigate business complexity.",
      icon: Scale,
      href: "/services#advisory",
    },
    {
      number: "04",
      title: "Training & Professional Development",
      shortTitle: "Training",
      description:
        "Build stronger teams through practical training and professional development programs that strengthen skills and capabilities.",
      icon: GraduationCap,
      href: "/services#training",
    },
  ] as const;