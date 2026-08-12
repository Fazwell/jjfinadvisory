export const mainNavigation = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ] as const;
  
  export const companyNavigation = [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Our Services",
      href: "/services",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ] as const;
  
  export const navigationConfig = {
    main: mainNavigation,
  
    cta: {
      label: "Get Started",
      href: "/contact",
    },
  
    footer: {
      company: companyNavigation,
    },
  } as const;