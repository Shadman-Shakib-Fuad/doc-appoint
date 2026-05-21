import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center">
        <h1 className="text-8xl font-bold">
          404
        </h1>

        <p className="text-2xl mt-5">
          Page Not Found
        </p>

        <Link
          href="/"
          className="btn btn-primary mt-8"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}