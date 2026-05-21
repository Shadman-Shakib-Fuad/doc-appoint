"use client";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    login();

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-20">
      <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-10">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <div>
            <label className="font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <button className="btn btn-primary w-full">
            Login
          </button>

          <button
            type="button"
            className="btn w-full"
          >
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  );
}