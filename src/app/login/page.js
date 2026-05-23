"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import api from "@/services/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email,
      };

      const res = await api.post(
        "/jwt",
        user
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      toast.success(
        "Login Successful"
      );

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.log(error);

      toast.error("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-5">
      <div className="bg-white shadow-2xl rounded-[35px] p-10 w-full max-w-md">
        <h1 className="text-4xl font-black text-center">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Welcome Back
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="input input-bordered w-full rounded-full"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="input input-bordered w-full rounded-full"
          />

          <button className="btn btn-primary w-full rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}