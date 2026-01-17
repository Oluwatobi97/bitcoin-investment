"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1C2D] via-[#312E81] to-[#7C3AED] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Log in to access your investment dashboard
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border bg-gray-50 text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border bg-gray-50 text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#2563EB] border-gray-300 rounded focus:ring-[#2563EB]"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#2563EB] hover:underline">
              Forgot password?
            </a>
          </div>

          <Link
            href="/dashboard"
            className="w-full block text-center bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-[#2563EB]/30"
          >
            Log In
          </Link>
        </form>

        <p className="mt-6 text-xs text-gray-500 text-center">
          By logging in, you agree to our secure authentication protocols and
          data protection standards.
        </p>

        <div className="mt-6 text-center  text-gray-600  text-sm">
          Dont have an account?{" "}
          <a
            href="/register"
            className="text-[#2563EB] font-medium hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
