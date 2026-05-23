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
      name: "All Appointments",
      path: "/all-appointments",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50">
      <div className="container-width flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-5xl font-black text-primary"
        >
          DocAppoint
        </Link>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                pathname === link.path
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "border-transparent hover:border-primary hover:text-primary"
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