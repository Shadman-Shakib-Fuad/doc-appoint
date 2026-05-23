"use client";

import { useEffect, useState } from "react";

export default function AllAppointmentsPage() {
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

  const clearAppointments = () => {
    localStorage.removeItem(
      "appointments"
    );

    setAppointments([]);
  };

  return (
    <div className="min-h-screen bg-base-200 py-24">
      <div className="container-width">
        <div className="text-center">
          <h1 className="text-6xl font-black">
            All Appointments
          </h1>

          <p className="mt-6 text-lg text-gray-500">
            Manage all your booked doctor
            appointments easily.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={
              clearAppointments
            }
            className="btn btn-error rounded-full px-8"
          >
            Clear Appointments
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {appointments.map(
            (doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[300px] object-cover"
                />

                <div className="p-8">
                  <h2 className="text-3xl font-black">
                    {doctor.name}
                  </h2>

                  <p className="text-primary font-semibold mt-2">
                    {
                      doctor.specialty
                    }
                  </p>

                  <div className="space-y-3 mt-5 text-gray-600">
                    <p>
                      Experience:{" "}
                      {
                        doctor.experience
                      }
                    </p>

                    <p>
                      {
                        doctor.hospital
                      }
                    </p>

                    <p>
                      Fee: ৳
                      {doctor.fee}
                    </p>

                    <p className="text-sm text-gray-400">
                      Booked At:{" "}
                      {
                        doctor.bookedAt
                      }
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}