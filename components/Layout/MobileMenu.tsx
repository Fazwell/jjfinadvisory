"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

import { navigationConfig } from "@/config/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="
        mt-3
        overflow-hidden
        rounded-3xl
        border border-black/10
        bg-white
        p-5
        md:hidden
      "
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base font-extrabold tracking-[-0.04em] text-black">
            J&J
          </p>

          <p className="text-[10px] font-semibold tracking-[0.12em] text-black/50">
            FIN ADVISORY
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            text-black
            transition-colors
            hover:bg-black
            hover:text-white
          "
        >
          <X size={17} />
        </button>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex flex-col">
        {navigationConfig.main.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="
              border-b
              border-black/10
              py-4
              text-base
              font-medium
              text-black
              transition-colors
              hover:text-black/50
            "
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={navigationConfig.cta.href}
        onClick={onClose}
        className="
          group
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          bg-primary
          px-5
          py-3.5
          text-sm
          font-semibold
          text-black
          transition-colors
          hover:bg-black
          hover:text-white
        "
      >
        {navigationConfig.cta.label}

        <ArrowUpRight
          size={16}
          className="
            transition-transform
            duration-200
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </Link>
    </div>
  );
}