import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-cyan-300 transition"
            >
              Investment Platform
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition font-medium"
              >
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="hidden sm:block text-white/80 hover:text-white transition font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-[#2563EB]/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0b1d3a] via-[#1f3a8a] via-[#6d28d9] to-[#db2777] pt-24">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Be early to the future of investment
          </h1>

          <p className="mt-6 text-lg text-slate-200 max-w-2xl">
            Invest securely in blockchain-powered financial opportunities on a
            platform built for transparency, performance, and long-term growth.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/register"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Investing
            </Link>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white text-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Trusted by investors building the future of finance
          </h2>
          <p className="mt-4 text-gray-600">
            Our investment platform is inspired by blockchain technology —
            delivering secure, transparent, and globally accessible solutions.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <Feature
            title="Secure & Transparent"
            desc="Blockchain-inspired infrastructure ensures trust and integrity."
          />
          <Feature
            title="Global Access"
            desc="Invest from anywhere with a globally accessible platform."
          />
          <Feature
            title="Designed for Growth"
            desc="Optimized investment tools for long-term performance."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1d3a] py-20 text-center">
        <h2 className="text-3xl font-bold">
          Start building your investment future today
        </h2>
        <Link
          href="/register"
          className="inline-block mt-6 bg-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Start Investing
        </Link>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}
