// Updated PreFooter.tsx - Simple
export default function PreFooter() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border border-gray-100 rounded-3xl p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Discover Excellence, Drive Business Forward</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Let&apos;s create an experience that exceeds expectation. Partner with us, and together, we&apos;ll propel your business into a realm of unparalleled growth and innovative excellence.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-black transition text-lg"
          >
            Book Us Today
          </a>
        </div>
      </div>
    </div>
  );
}