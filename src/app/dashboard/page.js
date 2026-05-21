"use client";

import {
  FaUserMd,
  FaCalendarCheck,
  FaHospital,
} from "react-icons/fa";

export default function DashboardPage() {
  const stats = [
    {
      title: "Doctors",
      value: "12+",
      icon: <FaUserMd size={40} />,
    },
    {
      title: "Appointments",
      value: "500+",
      icon: (
        <FaCalendarCheck size={40} />
      ),
    },
    {
      title: "Hospitals",
      value: "8+",
      icon: (
        <FaHospital size={40} />
      ),
    },
  ];

  const recentBookings = [
    {
      patient: "Rahim Ahmed",
      doctor: "Dr. Sarah Khan",
      date: "15 March 2026",
    },
    {
      patient: "Karim Hasan",
      doctor: "Dr. John Doe",
      date: "17 March 2026",
    },
    {
      patient: "Sadia Islam",
      doctor: "Dr. Emily Watson",
      date: "18 March 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-24 px-5">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Dashboard
          </h1>

          <p className="mt-5 text-lg text-gray-500">
            Manage appointments and track
            healthcare activities easily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="text-primary">
                {stat.icon}
              </div>

              <h2 className="text-5xl font-bold mt-6">
                {stat.value}
              </h2>

              <p className="mt-3 text-xl text-gray-500">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[30px] shadow-lg p-10 mt-20">
          <h2 className="text-4xl font-bold mb-10">
            Recent Bookings
          </h2>

          <div className="space-y-6">
            {recentBookings.map(
              (booking, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-6 hover:bg-base-200 transition"
                >
                  <h3 className="text-2xl font-bold">
                    {booking.patient}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Doctor:{" "}
                    {booking.doctor}
                  </p>

                  <p className="mt-1 text-gray-500">
                    Date: {booking.date}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <div className="bg-primary text-white rounded-[30px] p-10 shadow-xl">
            <h2 className="text-4xl font-bold">
              Quick Appointment
            </h2>

            <p className="mt-5 text-lg leading-8">
              Easily book appointments with
              top-rated doctors instantly.
            </p>

            <button className="btn mt-8 rounded-full">
              Book Now
            </button>
          </div>

          <div className="bg-black text-white rounded-[30px] p-10 shadow-xl">
            <h2 className="text-4xl font-bold">
              Emergency Support
            </h2>

            <p className="mt-5 text-lg leading-8">
              Get emergency healthcare
              support anytime with our
              trusted hospitals.
            </p>

            <button className="btn mt-8 rounded-full">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}