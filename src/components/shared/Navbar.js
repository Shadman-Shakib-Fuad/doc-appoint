"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-width navbar py-5">
        <div className="flex-1">
          <Link
            href="/"
            className="text-4xl font-black text-primary"
          >
            DocAppoint
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              pathname === "/"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              pathname ===
              "/dashboard"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            Dashboard
          </Link>

          <Link
            href="/all-appointments"
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              pathname ===
              "/all-appointments"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            Appointments
          </Link>
        </div>
      </div>
    </div>
  );
}