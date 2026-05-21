import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="container-width py-20 grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-primary">
            DocAppoint
          </h2>

          <p className="mt-5 text-gray-400 leading-8">
            Book appointments with
            experienced doctors easily and
            quickly from anywhere.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <Link
              href="/"
              className="hover:text-primary transition"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-primary transition"
            >
              Dashboard
            </Link>

            <Link
              href="/login"
              className="hover:text-primary transition"
            >
              Login
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">
            <p>Email: support@docappoint.com</p>

            <p>Phone: +880 1234-567890</p>

            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 DocAppoint. All Rights
        Reserved.
      </div>
    </footer>
  );
}