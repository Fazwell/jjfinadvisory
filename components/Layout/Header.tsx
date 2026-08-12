"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

import { navigationConfig } from "@/config/navigation";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full pt-5 md:pt-6">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            flex items-center justify-between
            rounded-full
            border border-black/10
            bg-white/90
            px-4 py-3
            backdrop-blur-md
            sm:px-5
            md:px-6
          "
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            aria-label="J&J Fin Advisory"
            className="flex shrink-0 items-center gap-2"
          >
            <span className="text-lg font-extrabold tracking-[-0.05em] text-black sm:text-xl">
              J&J
            </span>

            <span className="hidden h-5 w-px bg-black/20 sm:block" />

            <span className="hidden text-sm font-semibold tracking-tight text-black sm:block">
              FIN ADVISORY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigationConfig.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-black/60
                  transition-colors
                  hover:text-black
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href={navigationConfig.cta.href}
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full
              bg-primary
              px-5
              py-2.5
              text-sm
              font-semibold
              text-black
              transition-all
              hover:bg-black
              hover:text-white
              md:inline-flex
            "
          >
            {navigationConfig.cta.label}

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
              transition-transform
              active:scale-95
              md:hidden
            "
          >
            <Menu size={19} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </nav>
    </header>
  );
}