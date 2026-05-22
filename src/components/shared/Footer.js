import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-28">
      <div className="container-width py-20">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h2 className="text-4xl font-black text-white">
              DocAppoint
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Trusted healthcare
              appointment platform for
              patients and doctors.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 mt-6">
              <Link href="/">
                Home
              </Link>

              <Link href="/dashboard">
                Dashboard
              </Link>

              <Link href="/all-appointments">
                Appointments
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Contact
            </h3>

            <div className="space-y-4 mt-6 text-gray-300">
              <p>Email: support@docappoint.com</p>

              <p>Phone: +880123456789</p>

              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-sm text-gray-400">
          © 2026 DocAppoint. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}