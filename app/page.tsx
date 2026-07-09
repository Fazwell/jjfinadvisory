// app/page.tsx - Clean homepage
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Header />
      <main className="flex-1">
        {/* Hero or content here */}
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">J&J Fin Consultancy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert financial guidance for your success.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}