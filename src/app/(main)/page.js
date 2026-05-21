import Link from "next/link";

import TopDoctors from "@/components/home/TopDoctors";

import WhyChooseUs from "@/components/home/WhyChooseUs";

import Statistics from "@/components/home/Statistics";

export default function HomePage() {
  return (
    <div>
      <section className="bg-white">
        <div className="container-width min-h-[90vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find Trusted
                <span className="text-blue-600">
                  {" "}
                  Doctors
                </span>
                <br />
                And Book Online
              </h1>

              <p className="mt-8 text-lg text-gray-600 leading-8">
                Easily book appointments with
                experienced doctors anytime from
                anywhere. Fast, secure and simple
                healthcare solution for everyone.
              </p>

              <div className="flex items-center gap-5 mt-10">
                <Link
                  href="/all-appointments"
                  className="btn btn-primary btn-lg"
                >
                  Explore Doctors
                </Link>

                <button className="btn btn-outline btn-primary btn-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
                alt="doctor"
                className="w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <TopDoctors />

      <WhyChooseUs />

      <Statistics />
    </div>
  );
}