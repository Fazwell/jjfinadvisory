import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {children}

      <Footer />
    </div>
  );
}