"use client";

import { useState } from "react";

import Link from "next/link";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "@/firebase/firebase.config";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (
    e
  ) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;

    const password =
      form.password.value;

    try {
      setLoading(true);

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success(
        "Successfully Registered"
      );

      router.push("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister =
    async () => {
      try {
        const provider =
          new GoogleAuthProvider();

        await signInWithPopup(
          auth,
          provider
        );

        toast.success(
          "Successfully Registered.Now login to continue"
        );

        router.push("/login");
      } catch (error) {
        console.log(error);

        toast.error(
          "Google Register Failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-16">
      <div className="bg-white shadow-2xl rounded-[35px] w-full max-w-md p-10">
        <h1 className="text-4xl font-black text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Register to continue
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-5 mt-10"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input input-bordered w-full rounded-full"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input input-bordered w-full rounded-full"
          />

          <button className="btn btn-primary w-full rounded-full">
            {loading
              ? "Loading..."
              : "Register"}
          </button>
        </form>

        <button
          onClick={
            handleGoogleRegister
          }
          className="btn btn-outline w-full rounded-full mt-5"
        >
          Continue With Google
        </button>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}