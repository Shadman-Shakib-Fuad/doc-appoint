"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    const savedAppointments =
      JSON.parse(
        localStorage.getItem(
          "appointments"
        )
      ) || [];

    setAppointments(
      savedAppointments
    );
  }, []);

  const totalSpent =
    appointments.reduce(
      (total, item) =>
        total + item.fee,
      0
    );

  return (
    <div className="min-h-screen bg-base-200 py-24">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-6xl font-black">
            Dashboard
          </h1>

          <p className="mt-6 text-lg text-gray-500">
            Monitor your healthcare
            activities and appointments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          <div className="bg-white rounded-[30px] shadow-lg p-10 text-center">
            <h2 className="text-6xl font-black text-primary">
              {
                appointments.length
              }
            </h2>

            <p className="text-2xl mt-4 font-semibold">
              Total Appointments
            </p>
          </div>

          <div className="bg-white rounded-[30px] shadow-lg p-10 text-center">
            <h2 className="text-6xl font-black text-primary">
              ৳ {totalSpent}
            </h2>

            <p className="text-2xl mt-4 font-semibold">
              Total Investment
            </p>
          </div>

          <div className="bg-white rounded-[30px] shadow-lg p-10 text-center">
            <h2 className="text-6xl font-black text-primary">
              7 Days
            </h2>

            <p className="text-2xl mt-4 font-semibold">
              Weekly Activity
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-black text-center">
            Recent Activities
          </h2>

          <div className="space-y-8 mt-14">
            {appointments.map(
              (doctor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[30px] p-8 shadow-lg flex items-center gap-6"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-28 h-28 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-3xl font-black">
                      {doctor.name}
                    </h3>

                    <p className="text-primary font-semibold mt-2">
                      {
                        doctor.specialty
                      }
                    </p>

                    <p className="mt-2 text-gray-500">
                      {
                        doctor.hospital
                      }
                    </p>

                    <p className="mt-2">
                      Fee: ৳
                      {doctor.fee}
                    </p>

                    <p className="text-sm text-gray-400 mt-2">
                      {
                        doctor.bookedAt
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}