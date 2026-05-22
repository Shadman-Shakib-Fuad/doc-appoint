"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Appointments",
      path: "/all-appointments",
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-base-200">
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
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                pathname === item.path
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}