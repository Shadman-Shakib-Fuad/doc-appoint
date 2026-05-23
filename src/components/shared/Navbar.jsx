"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [token, setToken] =
    useState(null);

  useEffect(() => {
    const savedToken =
      localStorage.getItem("token");

    setToken(savedToken);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem(
      "token"
    );

    window.location.href = "/";
  };

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
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container-width flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-3xl font-black text-primary"
        >
          DocAppoint
        </Link>

        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                pathname === link.path
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {token ? (
            <button
              onClick={
                handleLogout
              }
              className="btn btn-error rounded-full text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-primary rounded-full"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-outline rounded-full"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}