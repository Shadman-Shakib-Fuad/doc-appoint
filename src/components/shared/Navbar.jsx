"use client";

import Link from "next/link";

import { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";

import ThemeToggle from "./ThemeToggle";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  const { user, logout } =
    useAuth();

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-width navbar">
        <div className="navbar-start">
          <Link
            href="/"
            className="text-3xl font-bold text-blue-600"
          >
            DocAppoint
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/all-appointments">
                All Appointments
              </Link>
            </li>

            <li>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex gap-3 items-center">
          <ThemeToggle />

          {user ? (
            <button
              onClick={logout}
              className="btn btn-error text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-outline btn-primary"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="text-3xl"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-white border-t lg:hidden">
          <div className="container-width py-5">
            <ul className="flex flex-col gap-5 font-medium">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-appointments">
                  All Appointments
                </Link>
              </li>

              <li>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>

              <div className="flex gap-3 pt-3">
                {user ? (
                  <button
                    onClick={logout}
                    className="btn btn-error text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="btn btn-outline btn-primary"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      className="btn btn-primary"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}