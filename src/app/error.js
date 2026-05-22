"use client";

export default function ErrorPage({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
      <h1 className="text-7xl font-black text-primary">
        Oops!
      </h1>

      <p className="mt-6 text-lg text-gray-500">
        Something went wrong.
      </p>

      <button
        onClick={() => reset()}
        className="btn btn-primary rounded-full mt-8"
      >
        Try Again
      </button>
    </div>
  );
}