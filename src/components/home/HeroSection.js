import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-center py-20">
        <div>
          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Book Your{" "}
            <span className="text-primary">
              Doctor Appointment
            </span>{" "}
            Easily
          </h1>

          <p className="mt-8 text-lg text-gray-500 leading-8 max-w-2xl">
            Find trusted doctors and book
            appointments instantly with
            modern healthcare solutions.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              href="/all-appointments"
              className="btn btn-primary rounded-full px-8"
            >
              Explore Doctors
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
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
            alt="Doctor"
            className="w-full max-w-xl rounded-[40px] shadow-2xl object-cover h-[650px]"
          />
        </div>
      </div>
    </div>
  );
}