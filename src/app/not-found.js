import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
      <h1 className="text-8xl font-black text-primary">
        404
      </h1>

      <p className="mt-6 text-xl text-gray-500">
        Page Not Found
      </p>

      <Link
        href="/"
        className="btn btn-primary rounded-full mt-10"
      >
        Back Home
      </Link>
    </div>
  );
}