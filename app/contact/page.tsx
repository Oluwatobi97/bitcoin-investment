"use client";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0B1C2D] via-[#312E81] to-[#7C3AED] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="max-w-2xl text-lg text-gray-200">
            Have questions? We're here to help. Reach out to our team for support, partnerships, or inquiries.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-[#2563EB]/30"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg text-gray-500 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">support@investment-platform.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg text-gray-500 mb-2">Business Hours</h3>
              <p className="text-gray-600 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

