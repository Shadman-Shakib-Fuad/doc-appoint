"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } =
    useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();

      localStorage.removeItem(
        "token"
      );

      toast.success(
        "Logout Successful"
      );

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navLinks = (
    <>
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
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-5 lg:px-10">
      <div className="navbar-start">
        <Link
          href="/"
          className="text-3xl font-bold text-primary"
        >
          DocAppoint
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-error"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              href="/login"
              className="btn btn-primary"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-outline"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}