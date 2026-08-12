"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Business Process Outsourcing",
  "Consultancy",
  "Advisory",
  "Training & Professional Development",
  "Other",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);

    // API integration will be added here.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-black"
          >
            Full name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="
              mt-2
              w-full
              border-b
              border-black/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-black
              outline-none
              placeholder:text-black/30
              focus:border-black
              transition-colors
            "
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-black"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="
              mt-2
              w-full
              border-b
              border-black/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-black
              outline-none
              placeholder:text-black/30
              focus:border-black
              transition-colors
            "
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="text-sm font-semibold text-black"
          >
            Company / Organization
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            className="
              mt-2
              w-full
              border-b
              border-black/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-black
              outline-none
              placeholder:text-black/30
              focus:border-black
              transition-colors
            "
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-black"
          >
            Phone number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+265..."
            className="
              mt-2
              w-full
              border-b
              border-black/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-black
              outline-none
              placeholder:text-black/30
              focus:border-black
              transition-colors
            "
          />
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="text-sm font-semibold text-black"
          >
            What can we help you with?
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="
              mt-2
              w-full
              border-b
              border-black/15
              bg-transparent
              px-0
              py-3
              text-sm
              text-black
              outline-none
              focus:border-black
              transition-colors
            "
          >
            <option value="" disabled>
              Select a service
            </option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-black"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us a little about what you need..."
            className="
              mt-2
              w-full
              resize-none
              border-b
              border-black/15
              bg-transparent
              px-0
              py-3
              text-sm
              leading-6
              text-black
              outline-none
              placeholder:text-black/30
              focus:border-black
              transition-colors
            "
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-black/40">
          By submitting this form, you agree to be contacted regarding
          your inquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            group
            inline-flex
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-full
            bg-primary
            px-6
            py-3.5
            text-sm
            font-semibold
            text-black
            transition-colors
            hover:bg-black
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}

          {!isSubmitting && (
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          )}
        </button>
      </div>
    </form>
  );
}