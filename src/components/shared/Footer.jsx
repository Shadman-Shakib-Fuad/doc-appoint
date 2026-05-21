import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="container-width py-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl font-bold text-blue-600">
            DocAppoint
          </h2>

          <div className="flex items-center gap-4 text-xl">
            <button className="btn btn-circle">
              <FaFacebookF />
            </button>

            <button className="btn btn-circle">
              <FaGithub />
            </button>

            <button className="btn btn-circle">
              <FaLinkedinIn />
            </button>
          </div>

          <p className="text-gray-500">
            © 2026 DocAppoint. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}