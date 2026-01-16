"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-[#2563EB] transition">
              Investment Platform
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center gap-4">
              {/* Back Button */}
              <button
                onClick={() => router.back()}
                className="px-4 py-2 text-gray-700 hover:text-[#2563EB] hover:bg-gray-100 rounded-lg transition font-medium"
              >
                 Back
              </button>

              {/* Logout Button */}
              <Link
                href="/"
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/30"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content with padding for fixed navbar */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}

