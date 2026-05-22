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
      </div>
    </div>
  );
}