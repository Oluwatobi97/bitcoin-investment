export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0B1C2D] via-[#312E81] to-[#7C3AED] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Building the Future of Digital Investment
          </h1>
          <p className="max-w-2xl text-lg text-gray-200">
            We provide secure, transparent, and technology-driven investment
            solutions powered by blockchain infrastructure.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl text-gray-500 font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make digital asset investing accessible,
              transparent, and secure for everyone. By leveraging blockchain
              technology, we eliminate unnecessary intermediaries while
              maintaining institutional-grade security standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-gray-500 font-semibold mb-4">Why Blockchain</h2>
            <p className="text-gray-600 leading-relaxed">
              Blockchain ensures transparency, immutability, and verifiable
              transactions. Every investment action is recorded and auditable,
              giving our users confidence and control over their assets.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-500 text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 text-gray-500 gap-8">
            {[
              {
                title: "Security First",
                text: "We apply industry-standard encryption, risk management, and secure infrastructure."
              },
              {
                title: "Transparency",
                text: "Clear investment processes, verifiable data, and honest communication."
              },
              {
                title: "Innovation",
                text: "We continuously improve our platform using modern blockchain technologies."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500">
          Investment involves risk. Past performance is not indicative of future
          results. Please invest responsibly.
        </div>
      </section>
    </div>
  );
}

