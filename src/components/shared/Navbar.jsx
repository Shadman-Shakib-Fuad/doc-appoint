import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="container-width navbar">
        <div className="navbar-start">
          <Link
            href="/"
            className="text-3xl font-bold text-blue-600"
          >
            DocAppoint
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 font-medium">
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
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <Link
            href="/login"
            className="btn btn-outline btn-primary"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="btn btn-primary"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}