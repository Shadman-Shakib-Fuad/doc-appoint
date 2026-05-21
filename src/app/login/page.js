"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();

  const { login, googleSignIn } =
    useAuth();

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const email = form.email.value;

    const password =
      form.password.value;

    try {
      await login(email, password);

      toast.success(
        "Login Successful"
      );

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  const handleGoogleLogin =
    async () => {
      try {
        await googleSignIn();

        toast.success(
          "Google Login Successful"
        );

        router.push("/");
      } catch (error) {
        toast.error(error.message);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-20 bg-base-200">
      <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-bold text-center mb-10">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button className="btn btn-primary w-full">
            {loading
              ? "Loading..."
              : "Login"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full mt-5"
        >
          Continue With Google
        </button>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}