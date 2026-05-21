import Link from "next/link";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="container-width py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-4xl font-bold text-blue-500">
              DocAppoint
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Easily connect with experienced
              doctors and book appointments
              online from anywhere.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-appointments">
                  All Doctors
                </Link>
              </li>

              <li>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Doctor Booking</li>

              <li>Online Consultation</li>

              <li>Medical Support</li>

              <li>Emergency Help</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <button className="btn btn-circle btn-primary">
                <FaFacebookF />
              </button>

              <button className="btn btn-circle btn-primary">
                <FaGithub />
              </button>

              <button className="btn btn-circle btn-primary">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 DocAppoint. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}