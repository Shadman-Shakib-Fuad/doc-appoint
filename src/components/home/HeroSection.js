import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-center py-20">
        <div>
          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Book Your{" "}
            <span className="text-primary">
              Doctor
            </span>{" "}
            Appointment Easily
          </h1>

          <p className="mt-8 text-lg text-gray-500 leading-8 max-w-2xl">
            Find trusted doctors, book
            appointments instantly, and get
            better healthcare services from
            anywhere.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              href="/all-appointments"
              className="btn btn-primary rounded-full px-8"
            >
              Book Now
            </Link>

            <Link
              href="/dashboard"
              className="btn btn-outline rounded-full px-8"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/ZYW3VTp/brown-brim.png"
            alt="Doctor"
            className="w-full max-w-lg rounded-[40px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}