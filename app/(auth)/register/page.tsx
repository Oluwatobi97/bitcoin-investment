"use client";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1C2D] via-[#312E81] to-[#7C3AED] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Create Account
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Start investing securely today
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 text-gray-600 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border text-gray-600 bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border text-gray-600 bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 border text-gray-600 bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 bg-gray-50 h-4 text-[#2563EB] border-gray-300 rounded focus:ring-[#2563EB]"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-[#2563EB] hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#2563EB] hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-[#2563EB]/30"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center  text-gray-600 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#2563EB] font-medium hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
