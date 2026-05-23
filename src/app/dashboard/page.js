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

  const totalAppointments =
    appointments.length;

  const totalSpent =
    appointments.reduce(
      (total, item) =>
        total + item.fee,
      0
    );

  const lastAppointment =
    appointments[
      appointments.length - 1
    ];

  return (
    <div className="min-h-screen bg-base-200 py-20">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-5xl font-black">
            Dashboard
          </h1>

          <p className="mt-5 text-gray-500">
            Track your activities
            and appointments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-[30px] p-8 shadow-xl">
            <h2 className="text-2xl font-bold">
              Total Appointments
            </h2>

            <p className="text-5xl font-black text-primary mt-6">
              {
                totalAppointments
              }
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-xl">
            <h2 className="text-2xl font-bold">
              Total Investment
            </h2>

            <p className="text-5xl font-black text-primary mt-6">
              ৳ {totalSpent}
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-xl">
            <h2 className="text-2xl font-bold">
              Last Appointment
            </h2>

            <p className="text-xl font-semibold mt-6">
              {lastAppointment
                ? lastAppointment.doctorName
                : "No Data"}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[30px] p-10 shadow-xl mt-16">
          <h2 className="text-3xl font-bold">
            Recent Activities
          </h2>

          <div className="space-y-5 mt-8">
            {appointments.length ===
            0 ? (
              <p className="text-gray-500">
                No activities found.
              </p>
            ) : (
              appointments.map(
                (
                  appointment,
                  index
                ) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-xl">
                        {
                          appointment.doctorName
                        }
                      </h3>

                      <p className="text-gray-500">
                        {
                          appointment.specialty
                        }
                      </p>
                    </div>

                    <div className="font-bold text-primary">
                      ৳
                      {
                        appointment.fee
                      }
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}