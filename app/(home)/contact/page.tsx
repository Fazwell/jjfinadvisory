import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:gap-16">
          {/* Contact Information */}
          <div className="md:col-span-4">
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}