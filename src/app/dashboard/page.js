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

  const clearAppointments =
    () => {
      localStorage.removeItem(
        "appointments"
      );

      setAppointments([]);
    };

  return (
    <div className="min-h-screen bg-base-200 py-20">
      <div className="container-width">

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[35px] p-10 text-white shadow-xl mb-16">
          <h1 className="text-5xl font-black">
            Welcome Back 👋
          </h1>

          <p className="mt-4 text-lg">
            Manage your appointments,
            healthcare activities and
            track your medical expenses.
          </p>
        </div>

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

          <div className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 duration-300">
            <h2 className="text-2xl font-bold">
              Total Appointments
            </h2>

            <p className="text-5xl font-black text-primary mt-6">
              {
                totalAppointments
              }
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 duration-300">
            <h2 className="text-2xl font-bold">
              Total Investment
            </h2>

            <p className="text-5xl font-black text-primary mt-6">
              ৳ {totalSpent}
            </p>
          </div>

          <div className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 duration-300">
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

        <div className="bg-white rounded-[35px] p-10 shadow-xl mt-16">

          <div className="flex items-center justify-between flex-wrap gap-5">

            <div>
              <h2 className="text-3xl font-bold">
                Recent Activities
              </h2>

              <p className="text-gray-500 mt-2">
                Your latest doctor
                appointments
              </p>
            </div>

            <button
              onClick={
                clearAppointments
              }
              className="btn btn-error rounded-full text-white"
            >
              Clear Appointments
            </button>

          </div>

          <div className="space-y-5 mt-10">

            {appointments.length ===
            0 ? (
              <div className="text-center py-16">
                <h2 className="text-3xl font-bold">
                  No Activities Found
                </h2>

                <p className="text-gray-500 mt-3">
                  Book an appointment
                  to see activities here.
                </p>
              </div>
            ) : (
              appointments.map(
                (
                  appointment,
                  index
                ) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-3xl p-6 flex items-center justify-between hover:shadow-lg duration-300"
                  >
                    <div>
                      <h3 className="font-bold text-2xl">
                        {
                          appointment.doctorName
                        }
                      </h3>

                      <p className="text-gray-500 mt-2">
                        {
                          appointment.specialty
                        }
                      </p>

                      <p className="text-gray-500">
                        {
                          appointment.hospital
                        }
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-black text-3xl text-primary">
                        ৳
                        {
                          appointment.fee
                        }
                      </p>

                      <p className="text-sm text-gray-400 mt-2">
                        Appointment Fee
                      </p>
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