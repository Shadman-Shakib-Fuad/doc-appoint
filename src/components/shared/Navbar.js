"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "All Appointments",
      path: "/all-appointments",
    },
  ];

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-width navbar py-4">
        <div className="flex-1">
          <Link
            href="/"
            className="text-3xl font-bold text-primary"
          >
            DocAppoint
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                pathname === link.path
                  ? "bg-primary text-white shadow-lg"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}